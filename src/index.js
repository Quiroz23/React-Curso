import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludar() {
  const buleano = true;

  return <h1>{buleano ? "verdadero" : "falso"}</h1>
}


root.render(
  <div>
    <Saludar />
  </div>
);
