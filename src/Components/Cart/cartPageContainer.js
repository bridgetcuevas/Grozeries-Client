import React from "react";
import { getCart } from "../../actions/cart";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Cart from "./cartPage";

class CartPageContainer extends React.Component {
  componentDidMount() {
    const cartId = this.props.match.params.cartId;
    this.props.getCart(cartId);
    console.log("this.props", this.props);
    console.log("cartPage.js ", this.props.cart);
  }
  render() {
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            <ul>
              {this.props.cart &&
                this.props.cart.length &&
                this.props.cart.map(cart => {
                  return <Cart key={cart.id} cart={cart} detail={false} />;
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
    cart: state.cart,
    // shops: state.shops,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getCart }
)(CartPageContainer);
