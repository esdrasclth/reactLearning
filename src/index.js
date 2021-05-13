import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';
import FormularioInicioSesion from './components/FormularioInicioSesion'
import Contador from './components/Contador'

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <>
      {sesion === true ?
        <div>
          <Usuario />
          <Contador cantidadIncrementar={3} cantidadDisminuir={3} />
          <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>
        </div>
        :
        <div>
          <p>No has iniciado sesion</p>
          <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        </div>
      }
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
