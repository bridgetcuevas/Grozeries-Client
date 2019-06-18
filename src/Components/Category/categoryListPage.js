import React, { Component } from "react";
import Category from "./category";
import { getCategories } from "../../actions/categories";
import { connect } from "react-redux";

// Needs to be implemented
class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    if (!this.props.categories) {
      return "...Loading";
    } else {
      return (
        <ul>
          {this.props.categories !== null &&
            this.props.categories.map(category => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  detail={false}
                />
              );
            })}
        </ul>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { getCategories }
)(CategoryList);
