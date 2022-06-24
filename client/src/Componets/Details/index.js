import React from 'react'
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams} from "react-router-dom";
import { getDogsDetails } from '../../Redux/Action'
import imagenDogs from '../../image/Cards.jpg'
import './details.css'

 function Details({ details, getDetails}){
    
   // let params = props.match.params.id
    let { id } = useParams()
    // let dispatch = useDispatch()
    // let details = useSelector(state => state.details)
    // console.log(details)
    useEffect(()=>{
      getDetails(id)
    }, [getDetails, id])

    return(
        <div className='contenedor-detalle' >{
                details? (<div>
                 <img className='Cards-img' src={details.image ? details.image : imagenDogs } alt={'dog'}/>
                 <p className='Cards-nombre' >Race: {details.name}</p>
                 <p className='Cards-weight' >Weight: {details.weight_min} - {details.weight_max}kg.</p> <br/><br/>
                 <p className='Cards-height' >Height: {details.height_min} - {details.height_max}kg.</p><br/><br/>
                 <p className='Cards-life_span'>Life time max: {details.life_time_min} - {details.life_time_max}</p><br/><br/>
                 <p className='Cards-temperament' >Temperaments: {details.temperament}</p>
                </div>) : null }
            <Link to={'/home'}>
                <button className='button-volver'>Volver</button>
            </Link>
        </div>
    )
}
function mapStateToProps(state){
    return{
        details: state.details
    }
}
function mapDispatchToProps(dispatch){
    return{
     getDetails: id => dispatch(getDogsDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)