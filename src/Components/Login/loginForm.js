import React from "react";
import "./login.css";

export default function LoginForm(props) {
  return (
    <form className="form-group pt-5" onSubmit={props.onSubmit}>
      <h3 className="text-center">Log in </h3>
      <label>Email:</label>
      <input
        className="form-control"
        type="text"
        name="email"
        value={props.values.email}
        onChange={props.onChange}
      />

      <label className="mt-2">Password:</label>
      <input
        className="form-control"
        type="password"
        name="password"
        value={props.values.password}
        onChange={props.onChange}
      />
      <button className=" mt-3 btn btn-primary btn-block" type="submit">
        Log in
      </button>
    </form>
  );
}
