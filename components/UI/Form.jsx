import React, { useState, useRef } from "react";
import classes from "../../styles/form.module.css";
import emailjs from "@emailjs/browser";
function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xboiwzp",
        "template_xxc79i8",
        form.current,
        "z8DjKfqOaEAh14jln"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form ref={form} className={`${classes.form}`} onSubmit={sendEmail}>
      <div className={`${classes.form_group}`}>
        <input type="text" placeholder="Your Name" name="name" required />
      </div>
      <div className={`${classes.form_group}`}>
        <input type="text" placeholder="Email Address" name="email" required />
      </div>
      <div className={`${classes.form_group}`}>
        <textarea type="text" placeholder="Message" name="message" required />
      </div>
      <button className="primary_btn" type="submit">
        Send
      </button>
    </form>
  );
}

export default Form;
