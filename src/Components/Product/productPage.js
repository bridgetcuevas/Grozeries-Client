import React, { Component } from "react";
import Product from "./product";
import { getProductDetails } from "../../actions/products";
import { addToOrderline } from "../../actions/orderlines";
// import { addToOrder, getOrder } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { Link } from "react-router-dom";

class ProductDetails extends Component {

  state = { }

  onChange = (event) => {
    this.setState({
      setQuantity: {
        ...this.state.setQuantity,
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.getProductDetails(productId);
  }

  handleClick = (e, userId, orderId) => {
    const {id, price, shopId} = this.props.product;
    const quantity = this.state.setQuantity.quantity;
    console.log(quantity, "Q")
    this.props.addToOrderline(id, price, quantity, shopId, userId, orderId);
  };


  render() {
    const userId = this.props.currentUser.id;
    const orderId = this.props.currentUser.orderid;
    const instock = this.props.product && this.props.product.in_stock === true
    const inputQuantity = this.state.setQuantity && this.state.setQuantity.quantity
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
            <div className="container mb-5">
            
            {this.props.product && this.props.product.prices_by === "gram" && (
              <div><input className="mb-2" style={{width:"4rem",textAlign:"right"}} type="number" name="quantity" min="50" max="5000" placeholder={this.props.product.prices_by}
              value={inputQuantity} onChange={this.onChange}/></div>)}
              
            {this.props.product && this.props.product.prices_by === "piece" && (
             <div><input className="mb-2" style={{width:"4rem",textAlign:"right"}} type="number" name="quantity" min="1" max="50" placeholder={this.props.product.prices_by} value={inputQuantity} onChange={this.onChange}/></div>)}
              
            {this.props.product && instock && (<button
                className="btn btn-outline-success"
                value={"hello"}
                onClick={(e)=> this.handleClick(e, userId, orderId, inputQuantity)}
              >
                Add to cart
            </button>)
            }
              {this.props.product && (
                <Link
                  className="ml-2"
                  to={`/shops/${this.props.product.shopId}`}
                >
                  <button className="btn btn-outline-secondary ">Back to shop</button>
                </Link>
                
              )}
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
    currentUser: state.currentUser,
    order: state.order,
    orderline: state.orderline,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getProductDetails, addToOrderline }
)(ProductDetails);
