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
      <div className="container pt-5 pb-5">
        <h1>
          <span>Hello</span>{" "}
          <b className="text-capitalize">
            {first_name} {last_name}
          </b>
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card p-3">
              <h6 className="m-0 font-weight-bold">Personal details</h6>
              <p className="mt-3">
                Address: {street_name} {house_number}, {zipcode}, {city}
              </p>
              <p>Email: {email}</p>
              <p>Phone Number: {phonenumber} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="card p-3">
          <h6 className="m-0 font-weight-bold">Order history</h6>
          <div className="m-auto p-5 text-muted">You have no orders yet</div>
        </div>
      </div>
    </div>
  );
};
