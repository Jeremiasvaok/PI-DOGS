import React from "react";
import { Link } from "react-router-dom";
import imageError from '../../image/Error.jpg'
import './Error.css'

export default function Error(){
    return (
        <div>
            <div>
            <img src={`${imageError}`} width="970" height="520" /> 
          </div>
            <Link to= '/home'><button className='botonn' >Home</button></Link>
        </div>
    )
}