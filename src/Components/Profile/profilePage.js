import React, { Component } from "react";
import User from "./user";
import { getUser } from "../../actions/users";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import {userId} from "../../jwt";

class ProfilePage extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUser(userId);
    console.log("Profile", this.props);
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.users && (
              <User
                key={this.props.match.params.id}
                user={this.props.user}
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
    users: state.users,
    userId: state.currentUser && userId(state.currentUser.jwt),
    loading: state.appStatus.loading
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(ProfilePage);
