import React from "react";
import "./Card.css";

function Card({ className, children }) {
  const classes = "card " + className;
  //Concept of Composition - children props, help to create wrapper components; children and className
  //reserved keywords and inbuilt props in react
  return <div className={classes}>{children}</div>;
}

export default Card;
