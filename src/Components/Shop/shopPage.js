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
  handleClick = (e, id, userId, orderid ) => {
    let product = this.props.shops.products;
    const shopProduct = product.find(product => product.id === id);
    const { price, quantity, shopId } = shopProduct;
    console.log("shopProduct.id", shopProduct.id);
    console.log("price", price);
    console.log("quant", quantity);
    console.log("shopid", shopId);
    console.log("userid", userId);
    console.log("orderId", orderid);
    this.props.addToOrderline(shopProduct.id, price, quantity, shopId, userId, orderid);
  };
  render() {
    const { shopId } = this.props.match.params;
    const orderid = this.props.currentUser.orderid;
    const userId = this.props.currentUser.id;
    console.log(orderid, "render OrderID")
    console.log(userId, "render userId")
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
                              orderid={orderid}
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