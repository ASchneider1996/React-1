import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Contacto } from "../models/contacto.class";

const BotonContacto = ({ contacto }) => {

    const [estado, setEstado] = useState(contacto.conectado);
    function actualizarEstado() {
        estado ? setEstado(false):setEstado(true)
    }

    return (
        <div>
            <p>
                Conectado: { estado ? "Contacto En Línea":"Contacto No Disponible" }
            </p>
        <div>
        <button onClick={actualizarEstado}> Actualizar Estado </button>
        </div>
    </div>
    ); 
}; 

BotonContacto.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default BotonContacto;