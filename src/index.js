import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Boleano } from "./Saludar";
import Producto from "./Producto";
import { Saludar2, Usercard } from "./Saludar2";
import { Boton } from "./Boton";
import { CartaTarea } from "./Tarea";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <CartaTarea ready={false}/>
  </>
);
