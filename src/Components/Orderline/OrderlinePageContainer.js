import React from "react";
import { Link } from "react-router-dom";
import { getOrderline } from "../../actions/orderlines";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Orderline from "./orderlinePage";

class OrderlinePageContainer extends React.Component {
  componentDidMount() {
    const orderid = this.props.currentUser.orderid
    this.props.getOrderline(orderid);
    console.log(orderid, "orderid")
  }
  // handleClick = event => {
  //   console.log(event, this.props.orderline);
  //   this.props.addToOrderline(this.props.orderline);
  // };

  render() {
    // const total = this.props.orderline.reduce((totalSoFar, current) => {
    //   return totalSoFar + parseFloat(current.price);
    // }, 0);
    const orderid = this.props.currentUser.orderid
    const orderlines = this.props.orderlines.orderlines
    console.log('orderline', this.props.orderlines)

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {/* {total > 0 && <h3>Total amount: € {total.toFixed(2)}</h3>} */}
            <Link to={`/orders/${orderid}/payments`}><button>Checkout</button></Link>

            <ul>
              {orderlines &&
                orderlines.length &&
                orderlines.map(orderline => {
                  return <Orderline key={orderline.id} orderline={orderline} detail={false} />;
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
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getOrderline }
)(OrderlinePageContainer);
