import { ContactoEstado } from "./contacto_estado.class";

export class Contacto {
    nombre = "";
    apellido = "";
    email = "m";
    conectado = ContactoEstado.false; 
    
    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido; 
        this.email = email; 
        this.conectado = conectado; 
    }
} 