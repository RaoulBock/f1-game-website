import React from "react";
import { GAMES_DATA, THUMBNAIL_DATA } from "../../Context/settings";
import { Thumbnail } from "../Thumbnail";

export const Banner = () => {
  return (
    <section className="updates-in-game">
      <h1>NEW IN F1 </h1>
      <div className="world-cup-section">
        {THUMBNAIL_DATA.map((e, i) => {
          return <Thumbnail key={i} item={e} />;
        })}
      </div>
    </section>
  );
};
