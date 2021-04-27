import React from "react";

const Contexto = React.createContext({
  texto: "",
  setTexto: () => {}
});

export default Contexto;
