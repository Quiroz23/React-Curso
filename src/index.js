import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, Boleano } from "./Saludar";
import Producto from "./Producto";
import { Saludar2, Usercard } from "./Saludar2";
import { Boton } from "./Boton";
import { CartaTarea } from "./Tarea";
import { SaludarCom } from "./SaludarCom";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Cristian",
    image: "https://robohash.org/User",
  },
  {
    id: 2,
    name: "Andres",
    image: "https://robohash.org/User2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1 >{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);
