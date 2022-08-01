import React from "react";
import classes from "../../styles/form.module.css";
function Form() {
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.form_group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form_group}`}>
        <input type="text" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form_group}`}>
        <textarea type="text" placeholder="Message" required />
      </div>
      <button className="primary_btn" type="submit">
        Send
      </button>
    </form>
  );
}

export default Form;
