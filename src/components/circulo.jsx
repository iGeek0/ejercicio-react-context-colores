import { useTema } from "./context/TemaContext";

function Circulo() {
    const {temaColor} = useTema();
    return ( <div className="circulo" style={{backgroundColor: temaColor}}></div> );
}

export default Circulo;