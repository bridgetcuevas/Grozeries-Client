import React, { Component } from "react";
import Shop from "./shop";
import { getShops } from "../../actions/shops";
import { connect } from "react-redux";


class ShopList extends Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    if (!this.props.shops) {
      return '...Loading';
    } else {
      return (
        <ul>
          {this.props.shops !== null &&
            this.props.shops.map(shop => {
              return (
                <Shop key={shop.id} shop={shop} detail={false} />
              );
            })}
        </ul>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    shops: state.shops
  };
};

export default connect(
  mapStateToProps,
  { getShops }
)(ShopList);