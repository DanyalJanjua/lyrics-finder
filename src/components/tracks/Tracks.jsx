import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";

import Track from "./Track";
class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tracklist, heading } = value;
          if (tracklist === undefined || tracklist.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h2 className="text-center mb-4">{heading}</h2>

                <div className="row">
                  {tracklist.map(item => (
                    <Track track={item.track} key={item.track.album_id} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default Tracks;
