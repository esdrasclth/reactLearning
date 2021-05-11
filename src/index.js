import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true);

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
        <button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>  
      </div>
      }
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
