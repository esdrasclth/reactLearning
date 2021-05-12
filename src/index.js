import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';
import FormularioInicioSesion from './components/FormularioInicioSesion'

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);

  return (
    <>
      {sesion === true ?
        <div>
          <Usuario />
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
