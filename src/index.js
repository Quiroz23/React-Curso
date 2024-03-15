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
  const [ mensaje , setMensaje] = useState('');

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)}/>
      <button onClick={()=> {
        alert("El mensaje es: "+ mensaje )
      } }>Guardar</button>
    </div>
  );
}

root.render(
  <>
    <Contador />
  </>
);
