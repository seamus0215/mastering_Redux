import React from "react";
import { render } from "react-dom";

function Hi() {
  return <h1>Hi</h1>;
}

render(<Hi />, document.getElementById("app"));
