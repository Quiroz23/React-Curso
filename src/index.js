import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Boleano } from "./Saludar";
import Producto from "./Producto";
import { Saludar2, Usercard } from "./Saludar2";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Usercard
      name="Cristian Quiroz"
      dinero={2000}
      casado={false}
      puntos={[12, 4.2, 5, 5.2]}
      direccion={{ calle: "Las chinchillas", ciudad: "San carlos" }}
    />
    <Saludar2 tittle="Hola React" />
    <Saludar2 tittle="Hola JSX" />
    <Saludar />
    <Boleano />
    <Producto />
  </>
);
