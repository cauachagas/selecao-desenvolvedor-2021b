import Comp1 from './comp1'
import Comp2 from './comp2'
import { useState } from "react";
import Contexto from "./contexto";

function Questao2() {
    const [texto, setTexto] = useState("Texto");
    const value = { texto, setTexto };

    return (
      <Contexto.Provider value={value}>
      <div>
        <h1>Questão 2</h1>
        <Comp1 />
        <Comp2 />
      </div>
      </Contexto.Provider>
    );
  }
  
export default Questao2;
