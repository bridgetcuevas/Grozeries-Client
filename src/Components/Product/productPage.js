import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { addToCart } from "../../actions/cart";

class ProductDetails extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProductDetails(productId);
    console.log("this.props", this.props);
    console.log("productPage.js ", this.props.product);
  }

  handleClick = event => {
    console.log(event, this.props.product);
    this.props.addToCart(this.props.product);
  };

  render() {
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
            <div>
              <button value={"hello"} onClick={this.handleClick}>
                Add to cart
              </button>
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

    cart: state.cart,

    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails, addToCart }
)(ProductDetails);
