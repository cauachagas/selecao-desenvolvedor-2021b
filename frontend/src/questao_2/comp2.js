import { useContext } from "react";
import Contexto from "./contexto";

function Comp2 () {
    const { texto, setTexto } = useContext(Contexto);
    return (
      <div>
        <input onChange={event => setTexto(event.target.value)} />
      </div>
    );
  }

export default Comp2;
