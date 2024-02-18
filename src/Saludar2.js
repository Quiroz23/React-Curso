export function Saludar2(props) {
  return <h1>Componente de {props.tittle} </h1>;
}

export function Usercard({name, dinero, casado,direccion}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Dinero:${dinero}</p>
      <p>{casado ? "Casado" : "Soltero"}</p>
        <ul>
            <li>Calle:{direccion.calle}</li>
            <li>Ciudad:{direccion.ciudad}</li>
        </ul>
    </div>
  );
}
