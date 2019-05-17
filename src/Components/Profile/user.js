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
    <div>
      <h2>
        Hello {first_name}
      </h2>
      <h3>Personal info</h3>
      <p>
        Address: {street_name}, {house_number}, {zipcode}, {city}
      </p>
      <p>Phone: {phonenumber} </p>
      <p>Email: {email}</p>
      <br />
    </div>
  );
};
