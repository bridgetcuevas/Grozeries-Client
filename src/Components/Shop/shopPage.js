import React, { Component } from "react";
import Shop from "./shop";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";


class shopDetails extends Component {
  componentDidMount() {
    this.props.getShopDetails(this.props.match.params.id);
  }

  render() {
    if (!this.props.shopDetails) {
      return '...Loading';
    } else {
      if (this.props.shopDetails) {
        return (
          <div>
            <Shop
              key={this.props.match.params.id}
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
    shopDetails: state.shopDetails,
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails }
)(shopDetails);