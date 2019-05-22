import React from "react";
import { Link } from "react-router-dom";
import { getOrderline } from "../../actions/orderlines";
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

  render() {
    const total = this.props.orderlines.reduce((totalSoFar, current) => {
      return totalSoFar + parseFloat(current.price);
    }, 0);
    const orderid = this.props.currentUser.orderid;
    const orderlines = this.props.orderlines;
    console.log("orderline", this.props.orderlines);

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>

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
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getOrderline }
)(OrderlinePageContainer);
