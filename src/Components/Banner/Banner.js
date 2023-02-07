import React from "react";
import { GAMES_DATA } from "../../Context/settings";

export const Banner = () => {
  return (
    <section className="banner">
      {GAMES_DATA.map((e, i) => {
        return <img src={e.image} alt={"img"} className={"banner-image"} />;
      })}
    </section>
  );
};
