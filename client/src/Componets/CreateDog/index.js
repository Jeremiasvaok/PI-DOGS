import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory} from "react-router-dom";
import { createDog, getTemperaments} from '../../Redux/Action/index'
import './createdogs.css'

export function Validate(input){
let errors={}
if (!input.name || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)){
  errors.name = "🤔 The first letter must be uppercase";
} else {
errors.name = "🙂Done!"
}

if(!input.height_min || !/^[1-9]\d*(\.\d+)?$/.test(input.height_min)){
  errors.height_min = '🤔 Only numbers';
}else {
errors.height_min = "😉Done!"
}
if(!input.height_max || !/^[1-9]\d*(\.\d+)?$/.test(input.height_max)){
  errors.height_max = '🤔 Only numbers';
} else {
errors.height_max = "😀Done!"
}
if(input.height_max <= input.height_min){
  errors.height_min = '🤔 Min value cannot be greater than the max';
}

if(!input.weight_min || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_min)){
  errors.weight_min = '🤔 Only numbers';
}
if(!input.weight_max || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_max)){
  errors.weight_max = '🤔 Only numbers';
}
if(input.weight_max <= input.weight_min){
  errors.weight_min = '🤔 Min value cannot be greater than the max';
}
if(!input.life_time_min || !/^[1-9]\d*(\.\d+)?$/.test(input.life_time_min)){
  errors.life_time_min = '🤔 Only numbers';
}
if(!input.life_time_max || !/^[1-9]\d*(\.\d+)?$/.test(input.life_time_max)){
errors.life_time_max = '🤔 Only numbers';
}
if(input.life_time_max <= input.life_time_min){
  errors.life_time_min = '🤔 Min value cannot be greater than the max';
}
if (input.image && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.image) ){
  errors.image = '🤔 Must be an URL or be empty';
}
if (input.temperament.length <= 1){
  errors.temperament = "🤔 The dog can't have more than four temperaments!";
}
return errors
}
export default function CreateDog(){
    let dispatch = useDispatch()
    let temperaments = useSelector((state) => state.temperaments)
    const history = useHistory()
    let[errors, setError] = useState({})
    let[input, setInput] = useState({
      name: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      life_time_min: "",
      life_time_max: "",
      temperament: [],
      image: "",
    });
    useEffect(()=>{
        dispatch(getTemperaments())
    }, [dispatch])

    const handleChange =(e) =>{
        e.preventDefault();
        setInput(prev => ({...prev, [e.target.name]: e.target.value})) 
      
        let objError = Validate({...input, [e.target.name]: e.target.name})
        setError(objError)
    }

    function handleSelect(e) {
      if (input.temperament.length === 4) {
        alert("The dog can't have more than four temperaments!");
      } else if (input.temperament.length < 4) {
        setInput({
          ...input,
          temperament: [...input.temperament, e.target.value],
        });
      }
    }
    function handleDelete(el) {
      setInput({
        ...input,
        temperament: input.temperament.filter((e) => e !== el),
      });
    }

 let handleSubmit = (e) =>{
    e.preventDefault();
    if(
      input.name  &&
      input.height_min  &&
      input.height_max > input.height_min &&
      input.weight_min  &&
      input.weight_max > input.weight_min &&
      input.life_time_min  &&
      input.weight_max > input.weight_min &&
      input.temperament.length !== 0
    ){
      dispatch(createDog(input));
        setInput({
          name: "",
          height_min: "",
          height_max: "",
          weight_min: "",
          weight_max: "",
          life_time_min: "",
          life_time_max: "",
          temperament: [],
        })
        alert('Your pet was successfully created!!')
        history.push('/home')
    }else{
        alert('We can not understand the request')
    }
 }
    return(
      <div className='contenedor-principal'>
      <Link to="/home">
        <button className='botton'> Back to home</button>
      </Link>
      <h1 className='title'>Create a new dog!</h1>
      <form className='from' onSubmit={(e) => handleSubmit(e)}>
        <p className='obligatorio'>* : Required</p>
        {/*--------raza---------------------------------------------------------*/}

        <div className='row'>
          <label className='labell'>*Breed:</label>
          <input
            className='imputl'
            type="text"
            value={input.name}
            name="name"
            id="name"
            required
            placeholder="Enter the breed..."
            onChange={(e) => handleChange(e)}
          />

          {/*--------tamaño-----------------------------------------------------------------*/}
          <div className='row'>
            <label className='label'>*Size:</label>
            <br />
            <div className='coso'>
              <div>
                <input
                  className='input'
                  type="number"
                  min="1"
                  max="100"
                  value={input.height_min}
                  name="height_min"
                  id="height_min"
                  required
                  placeholder="Min"
                  onChange={(e) => handleChange(e)}
                />
                cm.
              </div>
              <div>
                <input
                  className='input'
                  type="number"
                  min="1"
                  max="100"
                  value={input.height_max}
                  name="height_max"
                  id="height_max"
                  required
                  placeholder="Max"
                  onChange={(e) => handleChange(e)}
                />
                cm.
              </div>
            </div>
          </div>
          {/*-------peso------------------------------------------------------------------*/}
          <div className='row'>
            <label className='label'>*Weight:</label>
            <br />
            <div className='coso'>
              <div>
                <input
                  className='input'
                  type="number"
                  min="1"
                  max="100"
                  value={input.weight_min}
                  name="weight_min"
                  id="weight_min"
                  required
                  placeholder="Min"
                  onChange={(e) => handleChange(e)}
                />
                kg.
              </div>
              <div>
                <input
                  className='input'
                  type="number"
                  min="1"
                  max="100"
                  value={input.weight_max}
                  name="weight_max"
                  id="weight_max"
                  required
                  placeholder="Max"
                  onChange={(e) => handleChange(e)}
                />
                kg.
              </div>
            </div>
          </div>
          {/*-------años-----------------------------------------------------------------*/}
          <div className='row'>
            <label className='label'>*Lifespan:</label>
            <br />
            <div className='coso'>
              <div>
                <input
                  className='input'
                  min="1"
                  max="100"
                  type="number"
                  value={input.life_time_min}
                  name="life_time_min"
                  id="life_time_min"
                  required
                  placeholder="Min"
                  onChange={(e) => handleChange(e)}
                />{" "}
                year/s
              </div>
              <div>
                <input
                  className='input'
                  min="1"
                  max="100"
                  type="number"
                  value={input.life_time_max}
                  name="life_time_max"
                  id="life_time_max"
                  required
                  placeholder="Max"
                  onChange={(e) => handleChange(e)}
                />{" "}
                years.
              </div>
            </div>
          </div>
          {/*------imagen----------------------------------------------------------------*/}

          <label className='label'>Image:</label>
          <input
            type="imagen"
            className='inputl'
            value={input.image}
            name="image"
            placeholder="URL"
            onChange={(e) => handleChange(e)}
          />

          {/*------temperamentos-----------------------------------------------------*/}

          <label className='label'>*Temperaments:</label>
          <select className='select' onChange={(e) => handleSelect(e)}>
            {temperaments.map((temperament) => (
              <option value={temperament.name} key={temperament.id}>
                {temperament.name}
              </option>
            ))}
          </select>
          <ul className='ul'>
            <li className='li' key={"key"}>
              {input.temperament.map((el) => (
                <button
                  className='botonTemp'
                  type="button"
                  key={el.id}
                  onClick={() => handleDelete(el)}>
                  {el}
                </button>
              ))}
            </li>
          </ul>
        </div>
        <button className='botton' type="submit">
          Create!
        </button>
      </form>
      <div className='danger'>
        {errors.name && <p className='error'>{errors.name}</p>}
        {errors.height_min && <p className='error'>{errors.height_min}</p>}
        {errors.height_max && <p className='error'>{errors.height_max}</p>}
        {errors.weight_min && <p className='error'>{errors.weight_min}</p>}
        {errors.weight_max && <p className='error'>{errors.weight_max}</p>}
        {errors.life_time_min && (<p className='error'>{errors.life_time_min}</p>)}
        {errors.life_time_max && (<p className='error'>{errors.life_time_max}</p>)}
      </div>
    </div>
  );
}       