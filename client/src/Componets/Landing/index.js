import React from 'react'
import { Link } from "react-router-dom";
import './landing.css';

export default function landings(){
    return(
        <div className="Contenedor-principal">
            <div className="contenedor-h1">
                <h1 className="h1-titulo">WELCOME TO MY DOG APP!</h1>
            </div>
            <div className="contenedor-boton">
                <Link to='/home'>
                    <button className="boton-ingresar">GET INTO!</button>
                </Link>
               
            </div>

        </div>
    )
}