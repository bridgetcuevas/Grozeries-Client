import React from "react";

export default function SignupForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h4>Sign up</h4>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={props.values.first_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={props.values.last_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="street_name"
          value={props.values.street_name}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="house_number"
          value={props.values.house_number}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="zipcode"
          value={props.values.zipcode}
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
          name="phonenumber"
          value={props.values.phonenumber}
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
