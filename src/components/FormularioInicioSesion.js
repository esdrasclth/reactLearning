import React, { useState } from 'react';

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
        <form action="" onSubmit={onSubmit}>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                />
            </div>
            <button type="submit">Iniciar Sesion</button>
        </form>
    );
}

export default FormularioInicioSesion;