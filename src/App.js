import React, { useState, useRef } from "react";

import logo from "./logo.svg";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Contenedores from "./components/Contenedores";
import { Bloque } from "./components/Bloque";
import Nombre from "./components/Nombre";
import Contador from "./components/Contador";
import MuestraValor from "./components/resultado";

//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  //https://picsum.photos/200/300

  const people = {
    name: "Kevin",
    lastName: "Morales",
  };
  const people1 = {
    name: "Danny",
    lastName: "Juarez",
  };

  const cambiarColor = () => {
    if (claseCambio === "nombre1") {
      setClaseCambio("nombre2");
    } else {
      setClaseCambio("nombre1");
    }
  };
  //use state
  const [claseCambio, setClaseCambio] = useState("nombre1");
  const [contador, setContador] = useState(0);
  const largo = useRef(null);
  const ancho = useRef(null);
  const base = useRef(null);
  const area = useRef(null);
  const [r, modificaResultado] = useState(0);
  const calcula = (_) => {
    modificaResultado(r + largo.current.value);
    console.log(r);
  };
  const calcula2 = (_) => {
    modificaResultado(r - ancho.current.value);
    console.log(r);
  };
  const calcula3 = (_) => {
    modificaResultado(r * base.current.value);
    console.log(r);
  };
  const calcula4 = (_) => {
    modificaResultado(r / area.current.value);
    console.log(r);
  };
  const inicia = (_) => {
    modificaResultado(0);
    console.log(r);
  };
  return (
    <>
      <div className="App">
        <h2>CALCULADORA</h2>
        <button onClick={calcula}>SUMAR</button>{" "}
        <input type="text" ref={largo} />
        <br></br>
        <button onClick={calcula2}>RESTAR</button>{" "}
        <input type="text" ref={ancho} />
        <br></br>
        <button onClick={calcula3}>MULTIPLICAR</button>{" "}
        <input type="text" ref={base} />
        <br></br>
        <button onClick={calcula4}>DIVIDIR</button>{" "}
        <input type="text" ref={area} />
        <br></br>
        <button onClick={inicia}>CERO</button>
        <br></br>
        <h3>Resultado</h3>
        <MuestraValor resultado={r} />
        {/* {r} */}
        <div
          style={{
            display: "flex",
            flexDirection: "colum",
            justifyContent: "center",
          }}
        >
          {/* <Nombre nombre="Kevin" clase={claseCambio} />
          <Nombre nombre="Daniel" clase={claseCambio} /> */}
        </div>
        {/* <button onClick={() => cambiarColor()} type="button">
          Cambiar Color
        </button> */}
        <hr></hr>
        {/* <Contador contador={contador} cero={setContador} /> */}
      </div>
    </>
  );
}

export default App;
