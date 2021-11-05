import React from "react";
import Sidebar from "./Sidebar";
import "./contactUs.css";

function ContactUs() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2 style={{ textAlign: "center" }}>Contact Us </h2>
        <br />
        <br />
        <br />
        <div className="first">
          <h4>
            <h3 style={{ textAlign: "center" }}>Postal Address</h3>
            <br />
            <br />
            The Director Walchand College of Engineering , A/P: Vishrambag,
            Sangli - 416 415 Maharashtra, India Tel: +91-233-2300383
            Fax:+91-233-2300831
            <br />
            <a href="www.walchandsangli.ac.in">www.walchandsangli.ac.in </a>
          </h4>
        </div>
        <div class="contactMe">
          <h2>Contact me :</h2>
          <form
            action="mailto:nick22052000@gmail.com"
            method="POST"
            enctype="text/plain"
          >
            <table style={{ width: "100%" }}>
              <tr>
                <td>
                  <label>Your Name : </label>
                </td>
                <td>
                  <input type="text" name="Your name : " />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Enter your email : </label>
                </td>
                <td>
                  <input type="email" name="Your email : " />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Enter your message : </label>
                </td>
                <td>
                  <textarea
                    name="Your message : "
                    rows="10"
                    cols="30"
                  ></textarea>
                </td>
              </tr>
            </table>
            <button class="Button" type="submit" value="Send">
              Send
            </button>
          </form>
        </div>
        <div className="second">
          <h3 style={{ textAlign: "center" }}>Contact Details</h3>
          <h4>
            <br />
            <br />
            TPO :{" "}
            <a href="placement@walchandsangli.ac.in">
              placement@walchandsangli.ac.in
            </a>
            <br />
            <br />
            Acadamics :{" "}
            <a href="hod.cse@walchandsangli.ac.in">
              hod.cse@walchandsangli.ac.in
            </a>
            <br />
            <br />
            Admins :{" "}
            <a href="hod.cse@walchandsangli.ac.in">
              hod.cse@walchandsangli.ac.in
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
