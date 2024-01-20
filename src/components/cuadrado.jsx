import { useTema } from "./context/TemaContext";
function Cuadrado() {
    const {temaColor} = useTema();
    return ( <div className="cuadrado" style={{backgroundColor: temaColor}}></div> );
}

export default Cuadrado;