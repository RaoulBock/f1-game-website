import React from "react";

import logo from "../Components/images/logo.png";
import { Button } from "./Button/Button";

export const Nav = () => {
  const JUMBOTRON_MENU = [
    {
      id: 1,
      name: "Latest"
    },
    {
      id: 2,
      name: "Video"
    },
    {
      id: 3,
      name: "Schedule"
    },
    {
      id: 4,
      name: "Drivers"
    },
    {
      id: 5,
      name: "Teams"
    },
    {
      id: 6,
      name: "Gaming"
    },
    {
      id: 7,
      name: "Download"
    }
  ];

  const [isNavbarVisible, setIsNavbarVisible] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 280) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isNavbarVisible ? "nav-outline" : "nav-not-active"}>
      <img src={logo} alt={"logo"} className={"nav-logo"} />
      <div className="nav-menu">
        {JUMBOTRON_MENU.map((e, i) => {
          return <h4 key={i}>{e.name}</h4>;
        })}
      </div>
    </div>
  );
};
