import React, { useState } from "react";
import classes from "../../styles/form.module.css";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.form_group}`}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={`${classes.form_group}`}>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={`${classes.form_group}`}>
        <textarea
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button className="primary_btn" type="submit">
        Send
      </button>
    </form>
  );
}

export default Form;
