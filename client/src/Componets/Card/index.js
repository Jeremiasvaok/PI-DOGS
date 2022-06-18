import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({name,id, img, temperaments, weight}){
    return(
        <div className='Contenedor'>
            <p className="Card-nombre">Race: {name}</p>
            <img className="Card-img" src={img} alt='dogs'/>
            <p className="Card-temperament">Temperamensts: {temperaments}</p>
            <p className="Card-weight">Weight: {weight}</p>
            <Link to={`/dogs/${id}`}>
                <button className='button-detalle'>Details the dog</button>
            </Link>
        </div>
    )
}