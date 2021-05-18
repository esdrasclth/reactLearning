import React, { useState, useEffect } from 'react';
import Boton from './../elements/Boton';

const Contador = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);

    // useEffect(() => {
    //     console.log('El componente se renderizo.');
    // })

    // useEffect(() => {
    //     console.log('El componente cargo por primera vez.');
    // }, [])

    // useEffect(() => {
    //     console.log('El estado del contador cambio')
    // }, [cuenta])

    useEffect(() => {
        //Codigo del efecto del
        
        return (() => {
            console.log('Adios componente')
        })
    }, [])

    const Incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad);
    const Disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad);

    return (
        <div>
            <h1>Contador: {cuenta} </h1>
            <Boton negro onClick={() => Incrementar(props.cantidadIncrementar)}>Incrementar</Boton>
            <Boton negro onClick={() => Disminuir(props.cantidadDisminuir)}>Disminuir</Boton>
        </div>
    );
}

export default Contador;