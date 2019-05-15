import React, { Component } from "react";
import Product from "./product";
import { getProducts } from "../../actions/products";
import { connect } from "react-redux";


class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (!this.props.products) {
      return '...Loading';
    } else {
      return (
        <ul>
          {this.props.products !== null &&
            this.props.products.map(product => {
              return (
                <Product key={product.id} product={product} detail={false} />
              );
            })}
        </ul>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);