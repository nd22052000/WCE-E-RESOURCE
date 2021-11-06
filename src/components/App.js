import React, { useState } from "react";
import StudentLogin from "./StudentLogin";
import StudentPage from "./StudentPage";
import Resources from "./Resources";
import UploadResource from "./UploadResource";
import ContactUs from "./ContactUs";
import Logout from "./Logout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import About from "./About";

function App() {
  const [isStudentLogin, setStudentLogin] = useState(false);
  const [isFacultyLogin, setFacultyLogin] = useState(false);
  const [isTPOLogin, setTPOLogin] = useState(false);

  return (
    // <div className="Home">
    <div>
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="Home">
              <div className="div1">
                <img
                  className="wceimg"
                  src="https://uni.wcoeapps.in/site/static/images/wcoe.jpg"
                  alt="wce"
                />
                <h1 style={{ color: "white" }} className="heading">
                  WCE E-RESOURCE
                </h1>
              </div>
              <hr />
              <div className="mainButtons">
                <button
                  className="studentButton"
                  onClick={() => {
                    setStudentLogin(true);
                  }}
                >
                  Student Login
                </button>
                <button
                  className="facultyButton"
                  onClick={() => {
                    setFacultyLogin(true);
                  }}
                >
                  Faculty Login
                </button>
                <button
                  className="TPOButton"
                  onClick={() => {
                    setTPOLogin(true);
                  }}
                >
                  TPO Login
                </button>
                <footer>© Walchand College of Engineering, Sangli</footer>
              </div>
              {isStudentLogin ? <Redirect to="/Login" /> : null}
              {isFacultyLogin ? <Redirect to="/Login" /> : null}
              {isTPOLogin ? <Redirect to="/Login" /> : null}
            </div>
          </Route>
          <Route exact path="/Login">
            <StudentLogin />
          </Route>
          <Route exact path="/StudentPage">
            <StudentPage />
          </Route>
          <Route exact path="/StudentPage/Resources">
            <Resources />
          </Route>
          <Route exact path="/StudentPage/About">
            <About />
          </Route>
          <Route exact path="/StudentPage/ContactUs">
            <ContactUs />
          </Route>
          <Route exact path="/StudentPage/Logout">
            <Logout />
          </Route>
          <Route exact path="/StudentPage/UploadResource">
            <UploadResource />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
