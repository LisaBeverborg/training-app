import React from "react";
import classes  from "./Footer.module.css";
  
const Footer = () => {
  return (
    <div className= {classes.box}>
      <h1>
        Let's train
      </h1>
      <div className= {classes.container}>
          <div className= {classes.column}>
            <h2>About Us</h2>
          </div>
          <div className= {classes.column}>
            <h2>Contact Us</h2>
          </div>
          <div  className= {classes.column}>
            <h2>FAQ</h2>
        </div>
        </div>
      </div>
  );
};
export default Footer;
