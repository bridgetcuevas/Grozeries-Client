import React, { Component } from "react";
import ShopListItem from "../Shop/shopListItem";
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
            <div className="landing-header">
              <img src="https://media.architecturaldigest.com/photos/56bbbb64d33292707c63319c/4:3/w_3076,h_2307,c_limit/how-to-cheese-platter-01.jpg" />
              <div className="container header-content">
                <h1 className="h1-landingPage text-white font-weight-900 mt-5">Welcome</h1>
              </div>
            </div>
            <div className="container pt-5">
              <h1 className="h2-landingPage font-weight-700 mb-3">
               shop easy . shop fresh . shop local
              </h1>
              <p className="p-landingPage">Grozeries brings a world full of vibrant communities, all with online and offline access to a network of local shops and to the storiesbehind the products</p>
              <div className="row pt-5">
                {this.props.shops &&
                  this.props.shops.length &&
                  this.props.shops.map(shop => {
                    return (
                      <div key={shop.id} className="col-lg-3 col-md-4">
                        <ShopListItem shop={shop} />
                      </div>
                    );
                  })}
              </div>
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
