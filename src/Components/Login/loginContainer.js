import React from "react";
import LoginForm from "./loginForm";
import { connect } from "react-redux";
import { login } from "../../actions/users";
// import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component {
  state = { email: "", password: "" };

  onSubmit = user => {
    user.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // if (this.props.currentUser) return <Redirect to="/" />;
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { login }
)(LoginContainer);
