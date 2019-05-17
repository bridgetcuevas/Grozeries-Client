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
   
  } = props.users;


    return (
      <div>
      
        <h2>Hello {first_name}{last_name} </h2>
        <p>Street Name: {street_name}</p>
        <p>House Number: {house_number}</p>
        <p>Zipcode: {zipcode} </p>
        <p>City: {city} </p>
        <p>phonenumber: {phonenumber} </p>
        <p>Email: {email}</p>
        <br />
      </div>
    );
  };

