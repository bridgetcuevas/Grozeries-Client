import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { connect } from "react-redux";

class ProductDetails extends Component {
  componentDidMount() {
    const { shopId, productId } = this.props.match.params;
    this.props.getProductDetails(shopId, productId);
  }

  render() {
    if (!this.props.productDetails) {
      return "...Loading";
    } else {
      if (this.props.ProductDetails) {
        return (
          <div>
            <Product
              key={this.props.match.params.shopId}
              product={this.props.productDetails}
              detail={true}
            />
          </div>
        );
      } else {
        return <p>Could not find any product details</p>;
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    productDetails: state.productDetails
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails }
)(ProductDetails);
