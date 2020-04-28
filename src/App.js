import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

//Importar componentes
import MiComponente from "./components/MiComponente";

function MensajeMotivacion(nombre, apellido) {
  var mensaje = (
    <div>
      <p>
        Échale ganas {nombre} {apellido}...
      </p>
    </div>
  );

  return mensaje;
}

function App() {
  var nombre = "Paulo";
  var apellido = "Thdz";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {MensajeMotivacion(nombre, apellido)}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/**
         * Agrego componente
         */}
        <MiComponente />
        <MiComponente />
        <MiComponente />
        <MiComponente />



      </header>
    </div>
  );
}

export default App;
