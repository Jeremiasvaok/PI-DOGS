import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import{ searchByName } from '../../Redux/Action'
import './SearchBar.css'

export default function SearchBar(){
    const[input, setInput] = useState("");

    const dispatch =useDispatch()
   
    const handleSubmit = e =>{
            e.preventDefault();
            dispatch(searchByName(input))
            setInput("")
        }
    const handleChange = e =>{
            e.preventDefault();
            setInput(e.target.value)
            console.log(input)
        }
    return(
    <div className='contenedor-ser'>
        <form className='contenedor-from' onSubmit={handleSubmit}>
            <input
            className='input-search'
             type={'text'}
             placeholder={'busca una moscota'}
             value={input}
             onChange={e => handleChange(e)}
            />
            <button type={'submit'} className='input-submit'>search</button>
         </form>
    </div>
    )
}