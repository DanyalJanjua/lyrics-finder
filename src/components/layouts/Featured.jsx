import React from "react";
import Carrousel from "./Carrousel";
import Search from "../tracks/Search";
const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <Search />
      </div>
    </div>
  );
};

export default Featured;
