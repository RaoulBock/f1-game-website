import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Button } from "../Components/Button/Button";
import { Footer } from "../Components/Footer";
import { FullView } from "../Components/FullView";
import { Jumbotron } from "../Components/Jumbotron";
import { Nav } from "../Components/Nav";
import { Thumbnail } from "../Components/Thumbnail";
import { GAMES_DATA, THUMBNAIL_DATA } from "../Context/settings";

export const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function handleClick(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Nav />
      <Jumbotron
        text={
          "FIFA 23 Ultimate Team™ welcomes the future of The World’s Game—this"
        }
        title={"F1 23 Ultimate Racing."}
        description={
          "Excepteur qui eiusmod quis ex consectetur exercitation irure. Sint deserunt eu qui anim Lorem minim nostrud. Amet cillum anim adipisicing culpa labore velit officia consequat. Laboris pariatur in velit veniam consequat laborum eiusmod nulla officia excepteur."
        }
        src={
          "https://blog.hyland.com/wp-content/uploads/F1-Alfa-Romeo-3loops.gif"
        }
      />

      <div className="fade-out"></div>
      <Banner />

      <section className="new-session">
        <img
          src={
            "https://f1i.com/wp-content/uploads/2022/12/audi-f1-scaled-e1672310900240.jpg"
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

      <Jumbotron
        // text={"2023-01-08"}
        title={"Play today."}
        description={
          "Elit fugiat consequat pariatur velit amet culpa consectetur dolore. Dolor consequat consectetur et adipisicing exercitation reprehenderit labore magna sunt aliqua laborum mollit."
        }
      />
    </div>
  );
};
