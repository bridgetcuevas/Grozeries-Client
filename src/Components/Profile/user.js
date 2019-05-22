import React from "react";
import { MdCall, MdEmail, MdLocalShipping } from "react-icons/md";

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
            <div className="card p-3 mb-3">
              <h6 className="m-0 font-weight-bold">Personal details</h6>

              <pre className="mt-3 mb-1">
              <span className=" text-success"><MdLocalShipping/></span> <a>Address:</a>
              </pre>
              <p className="mb-1">{street_name} {house_number}</p>
              <p>{zipcode}, {city}</p>

              <pre className="mt-3 mb-1">
              <span className="mb-1 text-success"><MdEmail/></span> <a>Email:</a>
              </pre>
              <p>{email}</p>
              <pre className="mt-3 mb-1">
              <span className="mb-1 text-success"><MdCall/></span> <a>Number:</a>
              </pre>
              <p className="mb-1 ">{phonenumber} </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card p-3">
              <h6 className="m-0 font-weight-bold">Order history</h6>
              <div className="m-auto p-5 text-muted">
                You have no orders yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
