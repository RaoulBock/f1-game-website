import React from "react";
import { APP_ICONS } from "../Context/settings";

export const Footer = () => {
  return (
    <div className="footer-outline">
      <div className="footer-header-grid">
        <h3>F1</h3>
        <h3>Social media</h3>
      </div>
      <div className="footer-header-grid ">
        <div className="footer-grid">
          <h4>About F1</h4>
          <h4>News</h4>
          <h4>Updates</h4>
          <h4>Get F1</h4>
          <h4>F1 Global Series</h4>
        </div>
        <div className="footer-grid footer-icons">
          <h4>{APP_ICONS.TWITTER}</h4>
          <h4>{APP_ICONS.INSTAGRAM}</h4>
          <h4>{APP_ICONS.FACEBOOK}</h4>
        </div>
      </div>
    </div>
  );
};
