import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Pathfinding from "./components/Pathfinding";

ReactDOM.render(
  <React.StrictMode>
       <Pathfinding />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
