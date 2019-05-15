import React from "react";

export default function signupForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h4>Sign up</h4>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={props.values.firstName}
          onChange={props.onChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={props.values.lastName}
          onChange={props.onChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="street_name"
          value={props.values.streetName}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="house_number"
          value={props.values.houseNumber}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="zip_code"
          value={props.values.zipCode}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="city"
          value={props.values.city}
          onChange={props.onChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phone_number"
          value={props.values.phoneNumber}
          onChange={props.onChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={props.values.email}
          onChange={props.onChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={props.values.password}
          onChange={props.onChange}
        />
      </label>

      <button type="submit"> Sign up</button>
    </form>
  );
}
