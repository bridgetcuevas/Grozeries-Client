import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { getOrderline } from "../../actions/orderlines";
import { orderCheckout } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Orderline from "./orderlinePage";
import "./orderline.css"

class OrderlinePageContainer extends React.Component {
  componentDidMount() {
    const orderid = this.props.currentUser.orderid;
    this.props.getOrderline(orderid);
    console.log(orderid, "orderid");
  }
<<<<<<< HEAD
=======

  handleClick = (e, orderId) => {
    this.props.orderCheckout(orderId);
  };

  callback = url => {
    return <a href={url} />;
  };
>>>>>>> 9a739a9cfbfc29c319a3163ee6671f196da349aa

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
<<<<<<< HEAD
    console.log("orderline", this.props.orderlines);
=======
>>>>>>> 9a739a9cfbfc29c319a3163ee6671f196da349aa

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
<<<<<<< HEAD

            <div className="container">
            <h1 className="h2-CartPage font-weight-700">
              Your Cart
              </h1>
              <div className="row">
                {orderlines &&
                  orderlines.length &&
                  orderlines.map(orderline => {
                    return (
                      <div key={orderline.id} className="col-lg-3 col-md-4">
                        <Orderline orderline={orderline} detail={false} />
                      </div>
                    );
                  })}
                  
              </div>
        {total > 0 && <h3>Total € {total.toFixed(2)}</h3>}
            <Link to={`/orders/${orderid}/payments`}>
              <button className="btn btn-outline-success">Checkout</button>
            </Link>
            </div>
=======
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
>>>>>>> 9a739a9cfbfc29c319a3163ee6671f196da349aa
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
