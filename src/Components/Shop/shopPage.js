import React, { Component } from "react";
import Shop from "./shop";
import ProductListItem from "../Product/productListItem";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
// import { addToOrder, getOrder } from "../../actions/orders";
import { addToOrderline } from "../../actions/orderlines";
// import { userId } from "../../jwt";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }
  handleClick = (e, additemid) => {
    let item = this.props.shops.products;
    const shopProduct = item.find(item => item.id === additemid);
    const userId = this.props.currentUser.id;
    const { id, price, quantity, orderId, shopId } = shopProduct;
    console.log("shopProduct", shopProduct);
    this.props.addToOrderline(id, price, quantity, orderId, shopId, userId);
    // this.props.getOrder(userId);
    // this.props.getOrder(orders);
  };
  render() {
    console.log("SHOPPAGE", this.props);
    const { shopId } = this.props.match.params;
    const userId = this.props.currentUser.id;
    console.log(this.props);
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.shops && (
              <div>
                <Shop
                  key={this.props.match.params.id}
                  shop={this.props.shops}
                />

                <div className="container">
                  <div className="row">
                    {this.props.shops.products &&
                      this.props.shops.products.length &&
                      this.props.shops.products.map(product => {
                        return (
                          <div key={product.id} className="col-lg-3 col-md-4">
                            <ProductListItem
                              product={product}
                              userId={userId}
                              detail={false}
                              shopId={shopId}
                              handleClick={this.handleClick}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shopDetails: state.shopDetails,
    loading: state.appStatus.loading,
    shops: state.shops,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails, addToOrderline }
)(shopDetails);
