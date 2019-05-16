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
    console.log("THIS PROPS", this.props)
const {shops}= this.props
//const {shopId}= this.props.id

    //const thisShop = shops && shops.find(shop => shopId == this.props.match.params.id);
    //console.log("THIS SHOP", thisShop)
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.shops ? (
              <Shop
                key={this.props.match.params.id}
                shop={this.props.shops}
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
    loading: state.appStatus.loading,
    shops: state.shops
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails }
)(shopDetails);
