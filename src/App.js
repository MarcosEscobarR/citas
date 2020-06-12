import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario"

function App() {

  //state de citas
  const [Citas, setCitas] = useState([])

  //funcion que carga citas
  const cargarCitas = cita => {
    setCitas([
      ...Citas,
      cita
    ])
    
  }
    return (
      <Fragment>  
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
             <Formulario 
              cargarCitas = {cargarCitas}
             />
          </div>
          <div className="one-half column">
              2
          </div>
        </div>
      </div>
    </Fragment>

    );
}

export default App;
