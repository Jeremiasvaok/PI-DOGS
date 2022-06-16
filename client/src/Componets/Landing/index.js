import { Link } from "react-router-dom";
import './landing.css';

export default function landings(){
    return(
        <div className="Contenedor-principal">
            <div className="contenedor-h1">
                <h1 className="h1-titulo">Bienvenidos a mi app de Dogs!</h1>
            </div>
            <div className="contenedor-boton">
                <Link to='/home'>
                    <button className="boton-ingresar">INGREASAR!</button>
                </Link>
            </div>

        </div>
    )
}