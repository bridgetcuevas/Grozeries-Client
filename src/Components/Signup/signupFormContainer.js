import React from "react";
import SignupForm from "./signupForm";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import { Redirect } from "react-router-dom";

class SignupFormContainer extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    street_name: "",
    house_number: "",
    zipcode: "",
    city: "",
    phonenumber: "",
    email: "",
    password: "",
    user_type: "customer"
  };

  onSubmit = user => {
    user.preventDefault();
    this.props.signup(
      this.state.first_name,
      this.state.last_name,
      this.state.street_name,
      this.state.house_number,
      this.state.zipcode,
      this.state.city,
      this.state.phonenumber,
      this.state.email,
      this.state.password,
      this.state.user_type
    );
  };

  onChange = user => {
    this.setState({
      [user.target.name]: user.target.value
    });
  };
  render() {
    if (this.props.signup.success === true) return <Redirect to="/logins" />;
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  signup: state.signup,
  success: state.signup.success
});

export default connect(
  mapStateToProps,
  { signup }
)(SignupFormContainer);
