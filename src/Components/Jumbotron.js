import React from "react";
import { Button } from "./Button/Button";

export const Jumbotron = () => {
  return (
    <div className="jumbotron-outline">
      <div className="jumbotron-gif"></div>
      <div className="jumbotron-information">
        <h5>
          FIFA 23 Ultimate Team™ welcomes the future of The World’s Game—this
        </h5>
        <h2>F1 23 Ultimate Team</h2>
        <h5>
          Quis cillum dolore excepteur enim deserunt quis ullamco est incididunt
          ipsum. Magna sit ad sunt deserunt excepteur est. Non cillum cillum
          Lorem aute consequat irure.
        </h5>
        <Button title={"Buy now"} />
        <Button title={"Watch trailer"} />
      </div>
    </div>
  );
};
