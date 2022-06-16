import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import{ searchByName } from '../../Redux/Action'

export default function SearchBar(){
    const[input, setInput] = useState("");

    const dispatch =useDispatch()
   
    const handleChange = e =>{
        e.preventDefault();
        setInput(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
            dispatch(searchByName(input))
            setInput("")
        }
    
    return(
        <div>
            <input
             type={'text'}
             placeholder={'busca una moscota'}
             value={input}
             onChange={e => handleChange(e)}
            />
            <button 
            type={'submit'}
            onClick={e => handleSubmit(e)} 
            >
            Buscar
             </button>
             <Link to='/home'>volver</Link>
        </div>
    )
}