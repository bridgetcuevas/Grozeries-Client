import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ProductDetails extends Component {
  componentDidMount() {
    const { shopId, productId } = this.props.match.params;
    this.props.getProductDetails(shopId, productId);
  }

  render() {
        return (
          <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.productDetails ? (
            <Product
              key={this.props.match.params.shopId}
              product={this.props.productDetails}
              detail={true}
            />
            ): (
              "no result"  
            )}
          </div>
        )}
       </div>
        );
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
