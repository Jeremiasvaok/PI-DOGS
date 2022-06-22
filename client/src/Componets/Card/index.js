import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({name,id, img, temperament, weight_min, weight_max}){
    return(
        <div className='Contenedor'>
            <p className="Card-nombre">Race: {name}</p>
            <img className="Card-img" src={img} alt='dogs'/>
            <p className="Card-temperament">Temperamensts: {temperament}</p>
            <p className='Card-weight'>{weight_min} - {weight_max}kg.</p>
            <Link to={`/dogs/${id}`}>
                <button className='button-detalle'>Details the dog</button>
            </Link>
        </div>
    )
}