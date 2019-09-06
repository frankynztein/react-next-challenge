import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.css'
// import Checkbox from '../components/Checkbox';

class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Protégelos ahora</h2>
        <p>Ingresa los datos del titular.</p>

        <div className="MainPage__container-id">
          <select id="typeOfId" className="">
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
            <option value="pas">PAS</option>
          </select>
          <input
            className=""
            type="text"
            name="idNumber" />
          <br/>
          <input
            className=""
            type="text"
            name="idName" />
            <br/>
          <input
            type="checkbox"
            className="form-check-input"
            id="CheckProtectionPolicy"/>
          <label
            className="form-check-label"
            for="CheckProtectionPolicy">
              Acepto la Política de Protección de 
              Datos Personales y los Términos y 
              Condiciones.
          </label>
          <br/>
          <input
            type="checkbox"
            className="form-check-input"
            id="CheckShippingPolicy"/>
          <label
            className="form-check-label"
            for="CheckShippingPolicy">
              Acepto la Política de Envío de 
              Comunicaciones Comerciales.
          </label>
          <Button
            color="danger"
            type="button">
              Comencemos
          </Button>
        </div>

      </div>
    )
  }
}

export default Index;