import React from "react";

export const FullView = ({ src, title, description }) => {
  return (
    <div className="full-view-outline">
      <img src={src} alt={"img"} className={"full-view-img"} />
      <div className="full-view-information">
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
};
