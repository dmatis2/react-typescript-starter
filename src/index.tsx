import React from "react";
import { render } from "react-dom";

const App: React.FunctionComponent<unknown> = () => {
  return <h1>Hello world</h1>;
};

render(<App />, document.getElementById("app"));
