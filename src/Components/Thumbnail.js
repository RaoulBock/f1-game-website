import React from "react";
import { Button } from "./Button/Button";

export const Thumbnail = ({ item, title, description }) => {
  return (
    <div className="thumbnail-outline">
      <img src={item.image} alt={"thumbnail"} className={"thumbnail-image"} />
      <h3>{item.name}</h3>
      <h5>{item.description}</h5>
      <Button title={"Learn more"} />
    </div>
  );
};
