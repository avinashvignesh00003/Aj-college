import React from "react";
import "./title.css";
const title = ({title,subtitle}) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default title;
