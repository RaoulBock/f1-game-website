import React from "react";
import { Button } from "./Button/Button";

export const Jumbotron = ({ text, title, description }) => {
  return (
    <div className="jumbotron-outline">
      <div className="jumbotron-gif"></div>
      <div className="jumbotron-information">
        <h5>{text}</h5>
        <h2>{title}</h2>
        <h5>{description}</h5>
        <Button title={"Buy now"} />
        <Button title={"Watch trailer"} />
      </div>
    </div>
  );
};
