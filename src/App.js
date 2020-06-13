

import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario"
import Cita from "./components/Cita"

function App() {
  //Esta parte del codigo verifica si al cargar la pagina no hay nada en el local storege 
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //state de citas
  const [Citas, setCitas] = useState(citasIniciales)

  //funcion que carga citas
  const cargarCitas = cita => {
    setCitas([
      ...Citas,
      cita
    ])
    
  }

  //useEfect sirve para saber cuando cambio una parte del programa. Funciona como el DOMContentLoaded de JS
  //Se le pasa como una dependencia el state en el que va a estar pendiente como un array vacio
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(Citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [Citas])

  //funcion que elimina las citas del template
    const eliminaCita = id => {
      console.log(id);
      
      const nuevasCitas = Citas.filter(cita => cita.id !== id);
      setCitas(nuevasCitas);
    }

  //Variable que detecta si las citas estan vacias o no
  const titulo = Citas.length === 0 ? "No hay Citas" : "Administra tus citas"
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
              <h2>{titulo}</h2>
              {Citas.map(cita => (
                <Cita 
                  eliminaCita={eliminaCita}
                  key={cita.id}
                  cita={cita}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>

    );
}

export default App;
