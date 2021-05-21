import React from "react";

export default function Nombre({ nombre, clase }) {
  return (
    <div className={clase}>
      <h1> {nombre} </h1>
    </div>
  );
}
