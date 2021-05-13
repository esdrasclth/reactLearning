import React from 'react';
import {Titulo} from './Titulo'
import styled from 'styled-components'

const Usuario = () => {
    const pais = "Honduras";
    const amigos = ['Jorge', 'Pedro', 'Luis'];

    return (
        <div>
            <Titulo />
            <Titulo nombre="Cesar" color="red" />
            <Parrafo>Tu lista de amigos es:</Parrafo>
            {pais && <p>Tu eres de: {pais}</p>}
            <ul>
                {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
            <p>Que tengas un buen dia, bye!</p>
        </div>
    );
}

const Parrafo = styled.p`
    margin: 20px 0;
`;

export default Usuario;