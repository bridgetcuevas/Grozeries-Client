import React, { Component } from "react";
import Shop from "./shop";
import Product from "../Product/product";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }

  render() {
    console.log("THIS PROPS", this.props);
    const { shopId } = this.props.match.params;
   




    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.shops && (
              <div>
                <Shop
                  key={this.props.match.params.id}
                  shop={this.props.shops}
                  
                  detail={true}
                />
                <ul>
                  {this.props.shops.products &&
                  this.props.shops.products.length &&
                    this.props.shops.products.map(product => {
                      return (
                        <Product
                          key={product.id}
                          product={product}
                          detail={false}
                          shopId={shopId}
                        />
                      );
                    })}
                </ul>
              </div>
            )};
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
