import React from "react";
import { getOrderline } from "../../actions/orderlines";
import { orderCheckout } from "../../actions/orders";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Orderline from "./orderlinePage";
import "./orderline.css";
import { MdPayment } from "react-icons/md";

class OrderlinePageContainer extends React.Component {
  componentDidMount() {

    const userId = this.props.currentUser.id;
    this.props.getOrderline(userId);
  }


  handleClick = (e, userId) => {
    this.props.orderCheckout(userId);

  };

  callback = url => {
    return <a href={url} />;
  };

  render() {
    const url = this.props.url;

    const PAYBUTTON = url && (
      <a href={url}>
        <button className="btn btn-outline-secondary" value={"Checkout"}>
          <MdPayment /> Pay
        </button>
      </a>
    );

    const CHECKOUTBUTTON = !url && (
      <button
        className="btn btn-outline-success"
        value={"Checkout"}
        onClick={e => this.handleClick(e, userId)}
      >
        {" "}
        Checkout
      </button>
    );

    const total = this.props.orderlines.reduce((totalSoFar, current) => {
      return totalSoFar + parseFloat(current.total_price);
    }, 0);
    const userId = this.props.currentUser.id;
    const orderlines = this.props.orderlines;

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            <div className="container">
              <h1 className="h2-CartPage font-weight-700">Your Cart</h1>
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
              {total > 0 && (
                <h3 className="mt-2 ml-1">Total € {total.toFixed(2)}</h3>
              )}
              {CHECKOUTBUTTON}
              {PAYBUTTON}
            </div>
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
