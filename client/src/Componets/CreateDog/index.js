
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory} from "react-router-dom";
import { createDog, getTemperaments} from '../../Redux/Action/index'

import './createdogs.css'

export function Validate(input){
let error={}
//console.log(error)
  if(!input.name){
  error.name = 'Name is invalid porque tiene que ser mayor a 3 caracteres y menor a 20'
  }
  else if(input.heigth <15 && input.heigth >110 ){
    error.heigth= 'altura require the un number mayor a 15 y menor a  110'
  } else{
    error.heigth='ok'
  }
  if(input.weight  <5 && input.weight >82){
    error.weight ='peso se require con un peso menor a 5 y  mayor a 82'
  }
  else if(input.life_span <2 && input.life_span > 20){
    error.life_span =' requier una vida mayor a 2 y menor a 20'
  }
  return error
}

export default function CreateDog(){
    
    let dispatch= useDispatch()
    let  temperaments = useSelector((state) => state.temperaments)
    const history = useHistory()
    let [closenTemps, setClosenTemps] = useState([])
    let[input, setInput] = useState({
        name:'',
        heigth: Number(),
        weight:  Number(),
        life_span:  Number(),
        img: '',
        temperament: [],
    });
    let[error, setError] = useState({})

    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

    const handleChange =(e) =>{
        e.preventDefault();
        setInput(prev => ({...prev, [e.target.name]: e.target.value})) 
        //validamos la info 
        let objError = Validate({...input, [e.target.value]: e.target.value})
        setError(objError)
    }

const handleSelect = (e) =>{
    let index = e.target.selectedIndex;
    setClosenTemps((temps) =>[...temps, e.target.options[index].text])
    setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
    })
}

let handleSubmit = (e) =>{
    e.preventDefault();
    if(
        input.name && 
        input.heigth && 
        input.weight && 
        input.life_span && 
        input.temperament
    ){
      dispatch(createDog(input));
        setInput({
            name:'',
            heigth: Number(),
            weight:Number(),
            life_span: Number(),
            image:'',
            temperament: [],
        })
        alert('Tu mascota fue creada con exito!!')
        history.push('/home')
    }else{
        alert('No podemos compretar la solicitud')
    }
}
    return(
        <div>
           <form onSubmit={ e=> handleSubmit(e)}>
               <div>{
                   error.name && (<p className="danger">{error.name}</p>)
                }
                  <label>Nombre:</label>
                  <input type='text' 
                  placeholder='ingrese un nombre' 
                  name={'name'} 
                  value={input.name}
                  required
                  onChange={(e) => handleChange(e)}
                  className={error.name && 'danger'}
               ></input>
               </div>
               <div>{
                  error.heigth && (<p className="danger">{error.heigth}</p>)
                }
                 <label>Altura:</label>
                 <input 
                 type={'text'}
                 placeholder='ingrese una altura'
                 name="heigth"
                 value={input.heigth}
                 onChange={(e) => handleChange(e)} 
                 max='15'
                 min='110'
                 className={error.heigth && 'danger'}
                 ></input>
              </div>
              <div>{
                   error.weight && (<p className="danger">{error.weight}</p>)
                }
                  <label>Peso:</label>
                  <input 
                  type='text' 
                  placeholder="ingrese una peso"
                  required
                  value={input.weight}
                  name="weight"
                  onChange={(e) => handleChange(e)} 
                  className={error.weight && 'danger'}
                  ></input>
              </div>
              <div>{
                    error.life_span && (<p className="danger">{error.life_span}</p>)
                 }
                  <label>Años De Vida:</label>
                  <input 
                  type='text' 
                  placeholder='ingrese los años' 
                  required
                  value={input.life_span}
                  name="life_span"
                  onChange={(e) => handleChange(e)} 
                  className={error.life_span && 'danger'}
                  ></input>
              </div>
            <div>
                <label>Image:</label>
                <input 
                type='text'
                name="img"
                value={input.image}
                onChange={handleChange}
                autoComplete='off'
                required
                />
            </div>
            <div>
                <label>Temperaments:</label>
                <select onChange={handleSelect}>
                   <option  
                     value={'all'}>Temperaments</option>
                     {temperaments.map((te)=>(
                        <option
                          key={te.id}
                          value={te.name}>
                          {te.name}
                        </option>
                     ))}
                </select>
                <ul>
                    <h3>Closen temperaments:</h3>
                    <div>
                        {closenTemps?.map((e)=>(
                            <div
                             key={e}>
                                <p>{e}</p>
                            </div>
                        ))}
                    </div>
                </ul>
            </div>
            <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                > Create!</button>
            </div>
           </form>
              <div>
                <Link to={'/home'}>
                    <button>Volver</button>
                 </Link>
              </div>
        </div>
 )} 