import React, { Component } from "react";
import User from "./user";
import { getUser, getUsers } from "../../actions/users";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { userId } from "../../jwt";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.getUsers();
    // const userId = this.props.match.params.id;
    // console.log("userId in Profile", userId);
    // this.props.getUser(userId);
    console.log("Profile", this.props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {/* {
            // Object.values(
            this.props.currentUser.city
            // )
            } */}
            {this.props.currentUser && (
              <User
                key={this.props.match.params.id}
                currentUser={this.props.currentUser}
                detail={true}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    // === null
    // ? null
    // : Object.values(state.currentUser).sort((a, b) => b.id - a.id),
    userId: state.currentUser && userId(state.currentUser.jwt),
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getUser, getUsers }
)(ProfilePage);
