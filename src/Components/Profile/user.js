import React from "react";

export default props => {
  const {
    first_name,
    last_name,
    street_name,
    house_number,
    zipcode,
    city,
    email,
    phonenumber
  } = props.currentUser;

  return (
    <div className="container pt-5 pb-5">
      <h2>
        Hello {first_name} {last_name}
      </h2>
      <h5>Personal Details</h5>
      <p>
        Address: {street_name} {house_number}
      </p>
      <p> {zipcode}, {city}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phonenumber} </p>

      <br />
    </div>
  );
};
