import React from "react";
import { Link } from "react-router-dom";
import { getOrderline } from "../../actions/orderlines";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import Orderline from "./orderlinePage";

class OrderlinePageContainer extends React.Component {
  componentDidMount() {
    // const orderlineId = this.props.match.params.orderlineId;
    this.props.getOrderline();
  }
  handleClick = event => {
    console.log(event, this.props.orderline);
    this.props.addToOrderline(this.props.orderline);
  };

  render() {
    // const total = this.props.orderline.reduce((totalSoFar, current) => {
    //   return totalSoFar + parseFloat(current.price);
    // }, 0);
    const id = this.props.orderline.id;
    console.log("orderline", this.props.orderline);
    const product = this.props.product.find(product => product.id === this.props.orderline.productId);
    const shop = this.props.shop.find(shop => shop.id === this.props.orderline.shopId);


    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {/* {total > 0 && <h3>Total amount: € {total.toFixed(2)}</h3>} */}
            <Link to={`/orders/${id}/payments`}>
              <button>Checkout</button>
            </Link>

            <ul>
              {this.props.orderline &&
                this.props.orderline.length &&
                this.props.orderline.map(orderline => {
                  return (
                    <Orderline
                      key={orderline.id}
                      orderline={orderline}
                      shop={shop}
                      product={product}
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
    orderline: state.orderline,
    orders: state.orders,
    loading: state.appStatus.loading,
    shop: state.shop,
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  { getOrderline }
)(OrderlinePageContainer);
