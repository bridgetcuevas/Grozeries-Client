import React, { Component } from "react";
import Shop from "./shop";
import ProductListItem from "../Product/productListItem";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }

  render() {
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
                />
                <div className="container">
                  <div className="row">
                    {this.props.shops.products &&
                      this.props.shops.products.length &&
                      this.props.shops.products.map(product => {
                        return (
                          <div key={product.id} className="col-lg-4">
                            <ProductListItem
                              product={product}
                              detail={false}
                              shopId={shopId}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
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
