// import "antd/dist/reset.css";
// import "../App.css";

import React from "react";
import { Link } from "react-router-dom";




const Landing = () => {
  return (
    <>
        <div>
            <h1>Welcome !</h1>
            <p >Sign In </p>
            <Link to="/login" >Login</Link><br>
            </br>
            <Link to="/register" >Register</Link>
            <p >or view SITE if you have time</p>
            {/* <Link to="/check" >SITE</Link> */}
        </div>
    </>
  );
};

export default Landing;