import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page long-text">
      <h1>Contact Delphine</h1>
      <p>
        If you have any questions, please see the <Link to="/faqs">FAQs</Link>.
        If your questions are still not answered, please fill out the
        information below:
      </p>
      <form
        // action="mailto:twooliston@gmail.com?subject=Contact Academy Barocas&body=Hi,"
        method="post"
        enctype="text/plain"
        className="padding-100"
      >
        <label>Name:</label>
        <br />
        <input type="text" name="name" />
        <br />
        <label>E-mail:</label>
        <br />
        <input type="text" name="mail" />
        <br />
        <label>Comment:</label>
        <br />
        <textarea name="comment" rows="6" cols="40" />
        <input type="text" name="comment" size="50" />
        <br />
        <input type="submit" value="don't werk do it" className="button" />
      </form>
    </div>
  );
};

export default Contact;
