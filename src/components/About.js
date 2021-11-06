import React from "react";
import Sidebar from "./Sidebar";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2 style={{ textAlign: "center" }}>About </h2>
        <img
          className="wceimgAbout"
          src="http://1.bp.blogspot.com/-UuzDvRUXjh8/Tdxi-0uSVkI/AAAAAAAAAUU/jRfpkra_mmc/s1600/Walchand+college+of+engineering%252C+sangli+memories_Cool+AMPSS....jpg"
          alt="wce"
        />
        <div className="AboutContent">
          <h4>
            This website is a platform where every student can share content
            regarding academic.Other than academic content they can also share
            study materials of topic like CP,Robotics,Gate Examination
            etc...Faculty and TPO will be admin of this website.Students can
            update ,delete and add whatever content they like by logging in
            through their account.
          </h4>
          <hr />
          <br />
          <h4>Developers Details</h4>
          <ul>
            <li>
              Harshal Kodgire :{" "}
              <Link to="harshal.kodgire@walchandsangli.ac.in">
                harshal.kodgire@walchandsangli.ac.in
              </Link>
            </li>
            <li>
              {" "}
              Rutikesh Sawant :{" "}
              <Link to="rutikesh.sawant@walchandsangli.ac.in">
                harshal.kodgire@walchandsangli.ac.in
              </Link>
            </li>
            <li>
              {" "}
              Nikhil Danapgol :{" "}
              <Link to="nikhil.danapgol@walchandsangli.ac.in">
                harshal.kodgire@walchandsangli.ac.in
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default About;
