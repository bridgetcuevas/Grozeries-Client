import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { addProductToCart } from "../../actions/cart";

class ProductDetails extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProductDetails(productId);
    console.log("this.props", this.props);
  }

  handleClick = () => {
    this.props.addProductToCart();
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
              <button onClick={this.handleClick}>Add to cart</button>
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
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails, addProductToCart }
)(ProductDetails);
