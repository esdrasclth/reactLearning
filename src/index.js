import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';
import FormularioInicioSesion from './components/FormularioInicioSesion'
import Contador from './components/Contador'
import './index.css';
import Boton from './elements/Boton'

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);

  return (
    <div className="contenedor">
      {sesion === true ?
        <div>
          <Usuario />
          <Contador cantidadIncrementar={3} cantidadDisminuir={3} />
          <Boton onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
        </div>
        :
        <div>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        </div>
      }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
