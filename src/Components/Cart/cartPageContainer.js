import React from "react";
import { getCart } from "../../actions/cart";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Cart from "./cartPage";

class CartPageContainer extends React.Component {
  componentDidMount() {
    const cartId = this.props.match.params.cartId;
    this.props.getCart(cartId);
  }
  handleClick = event => {
    console.log(event, this.props.cart);
    this.props.addToOrder(this.props.cart);
  };

  render() {
    const total = this.props.cart.reduce((totalSoFar, current) => {
      return totalSoFar + parseFloat(current.price);
    }, 0);

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {total > 0 && <h3>Total amount: € {total.toFixed(2)}</h3>}
            <button onClick={this.handleClick}>Checkout</button>

            <ul>
              {this.props.cart &&
                this.props.cart.length &&
                this.props.cart.map(cart => {
                  return <Cart key={cart.id} cart={cart} detail={false} />;
                })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    orders: state.orders,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getCart }
)(CartPageContainer);
