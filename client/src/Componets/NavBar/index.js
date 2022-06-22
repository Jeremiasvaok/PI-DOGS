import React from 'react'
import SearchBar from '../SearchBar'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar(){
  return(
    <div className='contenedor-Nav'>
      <div className='contenedor-home'>
        <Link to='/'>
          <button className='boton'>HOME</button>
        </Link>
      <Link to='/createdog'>
        <button className='create'>CRAEATE DOGS!</button>
      </Link>
      </div>
      <div className='ser'>
        <SearchBar />
      </div>
    </div>
  )
}