import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Boleano  } from "./Saludar";
import Producto from "./Producto";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Saludar />
    <Boleano/>
    <Producto/>
  </>
);
