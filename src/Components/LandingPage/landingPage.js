import React, { Component } from "react";
import ShopListItem from "../Shop/shopListItem";
import { Link } from "react-router-dom";
import { getShops } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import "./landingPage.css";

class LandingPage extends Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div className="container">
            <h2>Bestel online bij de winkeliers uit jouw buurt</h2>
            <div className="row">
              {this.props.shops &&
                this.props.shops.length &&
                this.props.shops.map(shop => {
                  return (
                    <div className="col-lg-3">
                      <ShopListItem key={shop.id} shop={shop} detail={false} />
                    </div>
                  );
                })}
            </div>
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
)(LandingPage);
