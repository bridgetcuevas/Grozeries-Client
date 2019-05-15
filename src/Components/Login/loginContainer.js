import React from "react";
import loginPage from "./loginPage";
import { connect } from "react-redux";
import { login } from "../../actions/users";

class loginContainer extends React.Component {
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
      <loginPage
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
)(loginContainer);
