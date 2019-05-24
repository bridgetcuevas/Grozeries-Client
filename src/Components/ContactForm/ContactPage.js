import React from "react";
import "./ContactPage.css";
import { MdCall, MdEmail, MdBusiness } from "react-icons/md";

export default function ContactForm(props) {
  return (
    <div classname="container contact-page">

        <h1 className="h1-contact pt-5">Contact Us</h1>
        <p className="p-contact">
          If you have any questions or suggestions, please feel free to reach out. 
   
        </p>
        <pre className= "pre-contact pt-4">
        <span className="text-success"><MdEmail/></span><a> Email: grozeries@gmail.com</a>
        </pre>
        <pre className= "pre-contact">
        <span className="text-success"><MdBusiness/></span> <a> Address: Burgerweeshuispad 201, 1076 GR Amsterdam</a>
        </pre>
        <pre className= "pre-contact">
        <span className="text-success"><MdCall/></span><a> Phone Number: 020 261 5197</a>
        </pre>
      </div>
  
  );
}
