import React from "react";
import LoginForm from "./loginForm";
import { connect } from "react-redux";
import { login } from "../../actions/users";

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
  login: state.login
});

export default connect(
  mapStateToProps,
  { login }
)(LoginContainer);
