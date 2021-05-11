import React from 'react';

const Titulo = ({nombre = "Usuario", color = "grey"})=> {
    return (<h1 className="titulo" style={{color: color}}>Hola, {nombre}!</h1>);
}

export {Titulo};