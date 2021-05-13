import React, { useState } from 'react';

const Contador = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);
    const Incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad);
    const Disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad);

    return (
        <div>
            <h1>Contador: {cuenta} </h1>
            <button onClick={() => Incrementar(props.cantidadIncrementar)}>Incrementar</button>
            <button onClick={() => Disminuir(props.cantidadDisminuir)}>Disminuir</button>
        </div>
    );
}

export default Contador;