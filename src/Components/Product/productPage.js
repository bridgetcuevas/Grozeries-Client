import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { addToOrderline } from "../../actions/orderlines";
// import { addToOrder, getOrder } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { Link } from "react-router-dom";

class ProductDetails extends Component {
  
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProductDetails(productId);
  }
  
  // handleClick = event => {
  //   console.log(event, this.props.product);
  //   // this.props.addToOrderline(this.props.product);
  //  this.props.addToOrder();
  // };

  handleClick = (e, userId, orderId) => {
    const {id, price, quantity, shopId} = this.props.product;
    // console.log(this.props.currentUser, "this.props.currentUser")
    console.log(orderId, "orderId should be 3, not undefined");
    this.props.addToOrderline(id, price, quantity, shopId, userId, orderId);
    // this.props.getOrder(userId);
  };


  render() {
    // const { id } = this.props.product;
    const userId = this.props.currentUser.id;
    const orderId = this.props.currentUser.orderid;
    // console.log(this.props.currentUser.orderId, "this.props.currentUser.orderId")
    console.log(orderId, "orderId")
    // console.log(userId, "userId")
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.product && (
              <Product
                key={this.props.match.params.id}
                product={this.props.product}
                detail={true}
              />
            )}
            <div><input type="number" name="quantity" min="1" max="10000"/></div>
            <div className="container mb-5">
              <button
                className="btn btn-outline-success"
                value={"hello"}
                onClick={(e)=> this.handleClick(e, userId, orderId) }
              >
                Add to cart
              </button>
              {this.props.product && (
                <Link
                  className="ml-2"
                  to={`/shops/${this.props.product.shopId}`}
                >
                  <button className="btn btn-outline-secondary ">Back to shop</button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    currentUser: state.currentUser,
    order: state.order,
    orderline: state.orderline,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails, addToOrderline }
)(ProductDetails);
