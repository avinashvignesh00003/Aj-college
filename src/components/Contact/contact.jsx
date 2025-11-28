import React from "react";
import { useState } from "react";
import "./contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

///NOTE:-
///web3forms is the API key generator used for the handling form submission.
//You can create your own API key by signing up on web3forms.com
//It's free to use for basic features.
//Here we are using web3forms to handle the form submission in contact us form

const contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending..........🤔");
    const formData = new FormData(event.target);

    formData.append("access_key", "7394aa26-92dd-4632-9d10-0329a414f1f5");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
        alert("sucess!");
     event.target.reset();
    } 
    else {
      console.log("Error", res);
      setResult(res.message);
    
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message
          <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> avinashramesh03@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +99 440 83 497
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            required
          />
          <label>Your Email</label>
          <input
            type="Email"
            name="Email"
            placeholder="Enter your email id"
            required
          />
          <label>write Your Messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here..."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now!
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default contact;
