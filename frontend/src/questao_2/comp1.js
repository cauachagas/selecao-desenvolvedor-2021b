import { useContext } from "react";
import Contexto from "./contexto";

function Comp1() {
    const { texto, setTexto } = useContext(Contexto);
    return (
      <div>
        {texto}
      </div>
    );
  }
  
export default Comp1;
