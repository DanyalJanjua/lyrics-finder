import React from "react";

import Navbar from "./components/layouts/Navbar";

import Index from "./components/layouts/Index";
import { Provider } from "./context";
import "./resources/styles.css";
import Lyrics from "./components/tracks/Lyrics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
