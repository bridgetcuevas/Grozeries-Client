import React, { Component } from "react";
import Product from "./product";
import { getProducts } from "../../actions/products";
import { addToCart } from "../../actions/cart";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
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
            <ul>
              {this.props.products &&
                this.props.products.length &&
                this.props.products.map(product => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      detail={false}
                      addToCart={this.addToCart}
                    />
                    
                  );
                })}
            </ul>
          </div>
        )}
        ;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    shops: state.shops,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getProducts, addToCart }
)(ProductList);
