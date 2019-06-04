import React, { Component } from "react";
import User from "./user";
import { getUser, getUsers } from "../../actions/users";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { userId } from "../../jwt";


class ProfilePage extends Component {
  componentDidMount() {
    this.props.getUsers();
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
    userId: state.currentUser && userId(state.currentUser.jwt),
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getUser, getUsers }
)(ProfilePage);
