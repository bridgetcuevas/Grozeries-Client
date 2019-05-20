import React from "react";

export default function SignupForm(props) {
  return (
    <form className="form-group pt-5" onSubmit={props.onSubmit}>
      <h3 className="text-center" >Sign up</h3>
      <label>First Name:</label>
        <input
          className="form-control"
          type="text"
          name="first_name"
          value={props.values.first_name}
          onChange={props.onChange}
        />
      
      <label className="mt-2">Last Name: </label>
        <input
          className="form-control"
          type="text"
          name="last_name"
          value={props.values.last_name}
          onChange={props.onChange}
        />
     
      <label className="mt-2">Street Name:</label>
        <input
         className="form-control"
          type="text"
          name="street_name"
          value={props.values.street_name}
          onChange={props.onChange}
        />
        <label className="mt-2">House Number:</label>
        <input
         className="form-control"
          type="text"
          name="house_number"
          value={props.values.house_number}
          onChange={props.onChange}
        />
        <label className="mt-2">Zipcode:</label>
        <input
         className="form-control"
          type="text"
          name="zipcode"
          value={props.values.zipcode}
          onChange={props.onChange}
        />
        <label className="mt-2">City:</label>
        <input
         className="form-control"
          type="text"
          name="city"
          value={props.values.city}
          onChange={props.onChange}
        />
     
      <label className="mt-2"> Phone Number:</label>
        <input
         className="form-control"
          type="text"
          name="phonenumber"
          value={props.values.phonenumber}
          onChange={props.onChange}
        />
      <label className="mt-2"> Email:</label>
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

      <button className=" mt-3 btn btn-outline-secondary btn-block" type="submit"> Sign up</button>
    </form>
  );
}
