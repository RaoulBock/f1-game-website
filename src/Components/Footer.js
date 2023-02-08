import React from "react";
import { APP_ICONS, FOOTER_LOGO } from "../Context/settings";
import logo from "../Components/images/logo.png";

export const Footer = () => {
  return (
    <div className="footer-outline">
      <div className="footer-header-grid">
        <h3>F1</h3>
      </div>
      <div className="footer-header-grid footer-gap">
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
      <div className="footer-header-grid">
        <img src={FOOTER_LOGO} alt={"RP"} className={"footer-logo"} />
        <img
          src={
            "https://media.contentapi.ea.com/content/dam/gin/common/rating-icons/esrb/rating-pending.png"
          }
          alt={"RP"}
        />
      </div>
    </div>
  );
};
