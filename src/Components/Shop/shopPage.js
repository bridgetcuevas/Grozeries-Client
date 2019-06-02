import React, { Component } from "react";
import Shop from "./shop";
import ProductListItem from "../Product/productListItem";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { addToOrderline } from "../../actions/orderlines";
import toastr from "toastr";


class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }
  handleClick = (e, id, userId ) => {
    let product = this.props.shops.products;
    const shopProduct = product.find(product => product.id === id);
    const { price, quantity, shopId } = shopProduct;
    toastr.success("✓ Item successfuly added to Cart." );
    this.props.addToOrderline(shopProduct.id, price, quantity, shopId, userId);
  };
  render() {
    const { shopId } = this.props.match.params;
    const userId = this.props.currentUser && this.props.currentUser.id;
    console.log(userId, "USERID")
    

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
                          <div key={product.id} className="col-lg-3 col-md-4">
                            <ProductListItem
                              product={product}
                              userId={userId}
                              detail={false}
                              shopId={shopId}
                              handleClick={this.handleClick}
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
    shops: state.shops,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails, addToOrderline }
)(shopDetails);