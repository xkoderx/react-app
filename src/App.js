import './assets/css/App.css';
import './assets/images/logo.svg'
//importar componente
import Componente1 from './components/Componente1';

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
      <section className="componentes">
        <Componente1/>
        <Componente1/>
        <Componente1/>
        <Componente1/>
      </section>
    </div>
  );
}

export default App;
