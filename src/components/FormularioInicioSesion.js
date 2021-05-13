import React, { useState } from 'react';
import './FormularioInicioSesion.css'

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChange = (event) => {
        if(event.target.name === 'usuario'){
            cambiarUsuario(event.target.value);
        } else if(event.target.name === 'password'){
            cambiarPassword(event.target.value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(usuario === 'esdras' && password === '123'){
            props.cambiarEstadoSesion(true);
        } else {
            alert('datos incorrcetos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return (
        <form action="" onSubmit={onSubmit} className="formulario">
            <h1>No has iniciado sesion</h1>
            <div>
                <label htmlFor="usuario" className="label">Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className="input"
                />
            </div>
            <div>
                <label htmlFor="password" className="label">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    className="input"
                />
            </div>
            <button type="submit" className="boton">Iniciar Sesion</button>
        </form>
    );
}

export default FormularioInicioSesion;