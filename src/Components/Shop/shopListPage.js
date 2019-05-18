import React, { Component } from "react";
import Shop from "./shop";
import { getShops } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class ShopList extends Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            <ul>
              {this.props.shops &&
                this.props.shops.length &&
                this.props.shops.map(shop => {
                  return <Shop key={shop.id} shop={shop} detail={false} />;
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
    shops: state.shops,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getShops }
)(ShopList);
