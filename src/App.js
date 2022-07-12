import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Contacto } from './models/contacto.class';
import ContactComponent from './componentes/pure/contacto';
import ContactDataComponent from './componentes/container/contact_data';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ContactComponent></ContactComponent> */}
        <ContactDataComponent></ContactDataComponent>
      </header>
    </div>
  );
}

export default App;