import './App.css';

function holaMundo(nombre,edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h1>Tengo {edad} años</h1>
    </div>
  )
  return presentacion;
}

function App() {
  var nombre = "Erick Deloera";
  return (
    <div>
      <h1>{holaMundo(nombre,22)}</h1>
    </div>
  );
}

export default App;
