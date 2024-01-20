import './App.css'
import Circulo from './components/circulo';
import Cuadrado from './components/cuadrado';
import Rombo from './components/rombo';

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ height: "60vh", backgroundColor: "dodgerBlue" }} className='d-flex justify-content-center align-items-center'>
        <h1> El color actual es: ?????</h1>
      </div>
      <div style={{ height: "40vh", backgroundColor: "#e9e9e9" }} className='text-center'>

        <div className="row">
          <div className="col-md-12 m-5">
            <h1>Seleccina un Color</h1>
            <input type="color" />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Circulo />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Cuadrado />
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <Rombo />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
