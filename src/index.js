import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludar() {
  return <h1>Hola componente</h1>;
}

root.render(
  <div>
    <Saludar></Saludar>
  </div>
);
