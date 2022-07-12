import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import BotonContacto from '../../hooks/EstadoComponente';


const ContactComponent = ({ contacto }) => {

    const defaultContacto = new Contacto("Fulana", "DeTal", "fulana@outlook.com", false);

    return (
        <div>
            <p>
                Nombre: { defaultContacto.nombre }
            </p>
            <p>
                Apellido: { defaultContacto.apellido }
            </p>
            <p>
                Email: { defaultContacto.email }
            </p>
            <p>
                <BotonContacto contacto= {defaultContacto}></BotonContacto>
            </p>
        </div>
    );
};

ContactComponent.propTypes = {
    Nombre: PropTypes.string,
    Apellido: PropTypes.string,
    Email: PropTypes.string,
    Contacto: PropTypes.bool,
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactComponent;