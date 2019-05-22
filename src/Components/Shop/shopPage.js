import React, { Component } from "react";
import Shop from "./shop";
import ProductListItem from "../Product/productListItem";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { addToOrder, getOrder } from "../../actions/orders";
import { userId } from "../../jwt";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }
  handleClick = (e, additemid, orders) => {
    const item = this.props.shops.products;
    this.props.addToOrder(item.find(item => item.id === additemid));
    this.props.getOrder(userId);
    // this.props.getOrder(orders);
  };
  render() {
    console.log("SHOPPAGE", this.props);
    const { ShopId } = this.props.match.params;
    console.log(this.props)
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
                              ShopId={ShopId}
                              handleClick={this.handleClick}
                              // addToOrder={this.props.addToOrder}
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
    userId: state.currentUser && userId(state.currentUser.jwt),
    // orders: state.currentUser.orders 
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails, addToOrder, getOrder }
)(shopDetails);
