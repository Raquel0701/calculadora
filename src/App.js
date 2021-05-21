import React, { useState, useRef } from "react";
import {
  DashOutlined,
  CloseOutlined,
  MinusOutlined,
  CalculatorOutlined,
  PlusOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import logo from "./logo.svg";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Contenedores from "./components/Contenedores";
import { Bloque } from "./components/Bloque";
import Nombre from "./components/Nombre";
import Contador from "./components/Contador";
import MuestraValor from "./components/resultado";
import { Layout, Spin, Alert } from "antd";

const { Header, Footer, Sider, Content } = Layout;

//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  //use state
  const [claseCambio, setClaseCambio] = useState("nombre1");
  const [contador, setContador] = useState(0);
  const largo = useRef(null);
  const ancho = useRef(null);
  const base = useRef(null);
  const area = useRef(null);
  const [r, modificaResultado] = useState(0);
  const calcula = (_) => {
    modificaResultado(r + Number(largo.current.value));
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
        <Layout>
          <Header className="TextoI">
            <h1>ANTD</h1>
          </Header>
          <Layout>
            <Sider className="TextoII">
              <HomeOutlined /> OPCIONES
            </Sider>
            <Content className="TextoIII">
              <CalculatorOutlined /> <h2>CALCULADORA</h2>
              <div className="App1">
                <Spin size="large" /> <h3>Resultado</h3>
                <MuestraValor resultado={r} />
                {/* {r} */}
                <button className="bot" onClick={inicia}>
                  CERO
                </button>
                <br></br>
                <PlusOutlined />
                <button className="bot" onClick={calcula}>
                  SUMAR
                </button>{" "}
                <input className="in" type="number" ref={largo} />
                <br></br>
                <MinusOutlined />
                <button className="bot" onClick={calcula2}>
                  RESTAR
                </button>{" "}
                <input className="in" type="number" ref={ancho} />
                <br></br>
                <CloseOutlined />
                <button className="bot" onClick={calcula3}>
                  MULTIPLICAR
                </button>{" "}
                <input className="in" type="number" ref={base} />
                <br></br>
                <DashOutlined />
                <button className="bot" onClick={calcula4}>
                  DIVIDIR
                </button>{" "}
                <input className="in" type="number" ref={area} />
                <br></br>
              </div>
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
            </Content>
          </Layout>
          <Footer className="TextoIV">
            <Spin tip="Calculando...">
              <Alert
                message="CALCULANDO"
                description="Espere un momento, por favor."
                type="info"
              />
            </Spin>
          </Footer>
        </Layout>
      </div>
    </>
  );
}

export default App;
