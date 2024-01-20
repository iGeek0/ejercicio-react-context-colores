import { useTema } from "./context/TemaContext";
function Rombo() {
    const {temaColor} = useTema();
    return ( <div className="rombo" style={{backgroundColor: temaColor}}></div> );
}

export default Rombo;