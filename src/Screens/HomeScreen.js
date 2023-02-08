import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Button } from "../Components/Button/Button";
import { Footer } from "../Components/Footer";
import { Jumbotron } from "../Components/Jumbotron";
import { Nav } from "../Components/Nav";
import { Thumbnail } from "../Components/Thumbnail";
import { GAMES_DATA, THUMBNAIL_DATA } from "../Context/settings";

export const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Jumbotron />
      {/* <Banner /> */}
      <div className="fade-out"></div>
      <section className="world-cup-section">
        {THUMBNAIL_DATA.map((e, i) => {
          return <Thumbnail key={i} item={e} />;
        })}
      </section>

      <section className="new-session">
        <img
          src={
            "https://blog.hyland.com/wp-content/uploads/F1-Alfa-Romeo-3loops.gif"
          }
          alt={"img"}
          className={"new-session-image-new-era"}
        />
        <div className="new-session-information">
          <h2>THE NEW ERA HAS ARRIVED.</h2>
          <h4>Prepare to take your seat</h4>
        </div>
      </section>

      <section className="new-session">
        <div className="new-session-information">
          <h2>New Season, New Rules.</h2>
          <h4>
            Take your seat for a new season as redesigned cars and overhauled
            rules redefine race day with the authentic 2022 lineup.
          </h4>
        </div>
        <img
          src={
            "https://preview.redd.it/ferrari-f1-75-charles-leclerc-bahrain-pre-season-testing-v0-pbhadlajgzm81.jpg?auto=webp&s=d4784daae3ff303f5941577d1cd9233cfabfb0a0"
          }
          alt={"img"}
          className={"new-session-image"}
        />
      </section>

      <Footer />
    </div>
  );
};
