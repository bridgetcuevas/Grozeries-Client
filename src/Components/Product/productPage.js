import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ProductDetails extends Component {
  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProductDetails(productId);
    console.log("this.props", this.props);
  }

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
            )
            // : (
            //   "no result"
            // )
            }
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails }
)(ProductDetails);
