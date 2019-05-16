import React, { Component } from "react";
import Shop from "./shop";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.shopDetails ? (
              <Shop
                key={this.props.match.params.shopId}
                shop={this.props.shopDetails}
                detail={true}
              />
            ) : (
              "no result"
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shopDetails: state.shopDetails,
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails }
)(shopDetails);
