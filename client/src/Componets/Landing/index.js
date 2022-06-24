import React from 'react'
import { Link } from "react-router-dom";
import './landing.css';

export default function Landing(){
    return(
           <div className='grid-text'>
                    <h1 className='grid_title'>Welcome to my dog app</h1>
                    <Link to='/home'>
                    <button className='grid_title--trasform'>Clik me</button>
                    </Link>
           </div>
    )
}