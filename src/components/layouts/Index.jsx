import React from "react";
import Tracks from "../tracks/Tracks";

import Featured from "./Featured";

import Carrousel from "./Carrousel";

const Index = () => {
  return (
    <React.Fragment>
      <Featured />

      <div className="container">
        <Tracks />
      </div>
    </React.Fragment>
  );
};

export default Index;
