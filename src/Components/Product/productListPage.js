import React, { Component } from "react";
import ProductListItem from "./productListItem";
import { getProducts } from "../../actions/products";
import { addToOrder } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  handleClick = event => {
    console.log(event, this.props.product);
    this.props.addToOrder(this.props.product);
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
                    <ProductListItem
                      key={product.id}
                      product={product}
                      addToOrder={this.addToOrder}
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
  { getProducts, addToOrder }
)(ProductList);
