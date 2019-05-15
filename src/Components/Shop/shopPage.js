import React, { Component } from "react";
import Shop from "./shop";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }

  render() {
    if (!this.props.shopDetails) {
      return "...Loading";
    } else {
      console.log(this.props.shopDetails);
      if (this.props.shopDetails) {
        return (
          <div>
            <Shop
              key={this.props.match.params.shopId}
              shop={this.props.shopDetails}
              detail={true}
            />
          </div>
        );
      } else {
        return <p>Could not find any shop details</p>;
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    shopDetails: state.shopDetails
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails }
)(shopDetails);
