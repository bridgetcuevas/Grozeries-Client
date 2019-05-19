import React, { Component } from "react";
import Shop from "../Shop/shop";
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
          <div>
            <h2>Bestel online bij de winkeliers uit jouw buurt</h2>
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
)(LandingPage);
