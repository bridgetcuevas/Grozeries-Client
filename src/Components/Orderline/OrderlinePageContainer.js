import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { getOrderline } from "../../actions/orderlines";
import { orderCheckout } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Orderline from "./orderlinePage";

class OrderlinePageContainer extends React.Component {
  componentDidMount() {
    const orderid = this.props.currentUser.orderid;
    this.props.getOrderline(orderid);
    console.log(orderid, "orderid");
  }

  handleClick = (e, orderId) => {
    this.props.orderCheckout(orderId);
  };

  callback = url => {
    return <a href={url} />;
  };

  render() {
    const url = this.props.url;
    const PAYBUTTON = url && (
      <a href={url}>
        <h4>Pay with Mollie</h4>
      </a>
    );
    const total = this.props.orderlines.reduce((totalSoFar, current) => {
      return totalSoFar + parseFloat(current.price);
    }, 0);
    const orderid = this.props.currentUser.orderid;
    const orderlines = this.props.orderlines;

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {total > 0 && <h3>Total amount: € {total.toFixed(2)}</h3>}
            <button
              className="btn btn-outline-success"
              value={"Checkout"}
              onClick={e => this.handleClick(e, orderid)}
            >
              Checkout
            </button>
            {PAYBUTTON}
            {/* <button onClick={(e)=> this.call(e,orderId)} */}

            <ul>
              {orderlines &&
                orderlines.length &&
                orderlines.map(orderline => {
                  return (
                    <Orderline
                      key={orderline.id}
                      orderline={orderline}
                      detail={false}
                    />
                  );
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
    orderlines: state.orderlines,
    orders: state.orders,
    loading: state.appStatus.loading,
    currentUser: state.currentUser,
    url: state.payments
  };
};

export default connect(
  mapStateToProps,
  { getOrderline, orderCheckout }
)(OrderlinePageContainer);
