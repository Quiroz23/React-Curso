import "./tarea.css";
export function CartaTarea({ ready }) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red' }>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
