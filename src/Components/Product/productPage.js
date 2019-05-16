import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ProductDetails extends Component {
  componentDidMount() {
    const { shopId, productId } = this.props.match.params;
    this.props.getProductDetails(shopId, productId);
    console.log('this.props', this.props)
  }

  render() {
        return (
          <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.products && (
            <Product
              key={this.props.match.params.id}
              product={this.props.products}
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
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails }
)(ProductDetails);
