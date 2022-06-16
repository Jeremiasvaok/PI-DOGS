import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogsDetails } from '../../Redux/Action'

export default function Details(props){

    let params= props.match.params.id
     //1
    let dispatch = useDispatch()
    let details = useSelector(state => state.details)
  
    useEffect(()=>{
      dispatch(getDogsDetails(params))
    }, [dispatch, params])
    return(
        <div>{
                details ? (<div>
                 <img src={`${details.image}`} alt={'dog'}/>
                 <p>Nombre: {details.name}</p> 
                 <p>Peso: {details.weight}</p> 
                 <p>Altura: {details.height}</p>
                 <p>Años: {details.life_span}</p> 
                 <p>Temperamento: {details.temperament}</p>
                </div>) : null
             }
            <Link to={'/home'}>
                <button>Volver</button>
            </Link>
        </div>
    )
}