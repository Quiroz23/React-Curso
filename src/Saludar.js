export function Saludar() {
  function sumar(x, y) {
    return x + y;
  }
  const usuario = {
    nombre: "Cristian",
    Apellido: "Quiroz",
  };
  return (
    <div>
      <h1>{usuario.nombre}</h1>
      <h3>{usuario.Apellido}</h3>
      <h2>{sumar(10, 30)}</h2>
    </div>
  );
}

export function Boleano() {
  return <h1>Hola</h1>;
}
