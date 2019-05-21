import React from "react";
import { getOrder } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Order from "./checkoutPage";

class CheckOutPageContainer extends React.Component {
  componentDidMount() {
    const orderId = this.props.match.params.orderId;
    this.props.getOrder();
  }
  handleClick = event => {
    console.log(event, this.props.order);
    this.props.addToOrder(this.props.order);
  };

  render() {
      console.log('CHECKOUT', this.props)
    // const total = this.props.order.reduce((totalSoFar, current) => {
    //   return totalSoFar + parseFloat(current.price);
    // }, 0);

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {/* {total > 0 && <h3>Total amount: € {total.toFixed(2)}</h3>}
            <button onClick={this.handleClick}>Checkout</button> */}

            <ul>
              {this.props.order &&
                this.props.order.length &&
                this.props.order.map(order => {
                  return <Order key={order.id} order={order} detail={false} />;
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
    order: state.order,
    cart: state.cart,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getOrder }
)(CheckOutPageContainer);
