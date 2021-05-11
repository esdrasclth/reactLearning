import React from 'react';
import {Titulo} from './Titulo'

const Usuario = () => {
    const pais = "Honduras";
    const amigos = ['Jorge', 'Pedro', 'Luis'];

    return (
        <div>
            <Titulo />
            <Titulo nombre="Cesar" color="red" />
            <p>Tu lista de amigos es:</p>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
            <p>Que tengas un buen dia, bye!</p>
        </div>
    );
}

export default Usuario;