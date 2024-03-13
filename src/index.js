import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Boleano } from "./Saludar";
import Producto from "./Producto";
import { Saludar2, Usercard } from "./Saludar2";
import { Boton } from "./Boton";
import { CartaTarea } from "./Tarea";
import { SaludarCom } from "./SaludarCom";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Restar
      </button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

root.render(
  <>
    <Contador />
  </>
);
