import React from "react";

export const Button = ({ title, className }) => {
  return <button className={className || "btn btn-primary"}>{title}</button>;
};
