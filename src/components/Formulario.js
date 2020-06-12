import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";

const Formulario = () => {

    //state de las citas
    const [Cita, setCita] = useState({
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    });

    //state de errores
    const [Error, setError] = useState(false)

    //funcion que agrega citas
    const actualizarState = e => {
        setCita({
            ...Cita,
            [e.target.name] : e.target.value
        })  
    }

    //destructuring de los datos
    const {mascota, propietario, fecha, hora, sintomas} = Cita;

    const submitCita = e => {
        e.preventDefault();

        //validar
        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "" ){
            setError(true)
            return;
        }

        //eliminar mensaje de error
        setError(false)

        //Asignar ID
        Cita.id = uuid();
        console.log(Cita);
        
        //Crear Cita

        //Reiniciar el form

    }
    return (
        <Fragment>
            <h2>CrearCita</h2>
            {Error ?<p className="alerta-error">Todos los Campos deben llenarse</p> : null }
            <form onSubmit = {submitCita}>
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value = {mascota}
                ></input>

                <label>Nombre del Duenho</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Del duenho de la mascota"
                    onChange={actualizarState}
                    value = {propietario}
                ></input>

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" onChange={actualizarState} value = {fecha}></input>

                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" onChange={actualizarState} value = {hora}></input>

                <label>Sintomas</label>
                <textarea className="u-full-width" name="sintomas" onChange={actualizarState} value = {sintomas}></textarea>

                <button type="submit" className="u-full-width button-primary">
                    Agendar Cita
                </button>
            </form>
        </Fragment>
    );
};

export default Formulario;
