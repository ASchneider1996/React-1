import React from 'react';
import { ContactoEstado } from '../../models/contacto_estado.class';
import { Contacto } from '../../models/contacto.class';
import ContactComponent from '../pure/contacto';


const ContactDataComponent = () => {

    const defaultContacto = new Contacto("", "", "", false);
   
    return (
        <div>
            <div>
                <h1>Contacto</h1>
            </div>
            <ContactComponent contacto={defaultContacto}></ContactComponent>
        </div>
    );
};

export default ContactDataComponent;