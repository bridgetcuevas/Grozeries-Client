import React, { Component } from "react";
import Product from "./product";
import { getProducts } from "../../actions/products";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

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
  { getProducts }
)(ProductList);
