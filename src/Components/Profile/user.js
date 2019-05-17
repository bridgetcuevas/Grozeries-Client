import React from "react";

export default props => {
  const {
    first_name,
    last_name,
    street_name,
    house_number,
    zipcode,
    city,
    phonenumber,
    email
  } = props.user;

  return (
    <div>
      <h2>
        Welcome {first_name} {last_name}{" "}
      </h2>
      <p>
        Address :{street_name} {house_number}
      </p>
      <p>
        {zipcode} {city}
      </p>
      <p>Phone Number: {phonenumber}</p>
      <p> Email: {email}</p>
      <br />
    </div>
  );
};
