import * as React from "react";
import { render } from "react-dom";
import MapView from "./components/MapView";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MapView isMarkerShown={true} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
