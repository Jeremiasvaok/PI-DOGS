import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import{
    orderZA,
    orderAZ,
    weightAZ,
    weightZA,
    getTemperaments,
    filter,
    filterTem,
    getAllDogs
} from '../../Redux/Action'

export default function Order(){
    const dispatch = useDispatch()
    const allTemp = useSelector(state => state.temperaments)
let orderA = (e) =>{
    e.preventDefault()
    dispatch(orderAZ())
}
let orderZ= (e) =>{
    e.preventDefault();
    dispatch(orderZA())
}
let  weightA = (e) =>{
    e.preventDefault();
    dispatch(weightAZ())
}
let weightZ = (e)=>{
    e.preventDefault();
    dispatch(weightZA())
}
let allDogs = (e)=>{
    e.preventDefault();
    dispatch(getAllDogs())
}
let filterBy = (e) =>{
    e.preventDefault();
    dispatch(filter(e.target.value))
}
let handleChange = (e) =>{
    e.preventDefault();
    dispatch(filterTem(e.target.value))
}
useEffect(()=>{
    dispatch(getTemperaments())
},[dispatch])

return(
    <div className='Contenedor-principal'>
      <button 
      className='Boton'
      onClick={(e)=> orderA(e)}
      >A a Z</button>
      <button
      className='Boton'
      onClick={(e)=> orderZ(e)}
      >Z a A</button>
      <button
      className='Boton'
      onClick={(e)=> weightA(e)}
      > Weight: - o +</button>
      <button
      className='Boton'
      onClick={(e)=> weightZ(e)}
      >Weight:+ o -</button>
      <button
       className='Boton'
       value='DATABASE'
       type='submit'
       onClick={(e) => filterBy(e)}
      >perros creados</button>
      <button
      className='Boton'
      value='ALL'
      type='submit'
      onClick={(e) => allDogs(e)}
      >todos los peroos</button>

      <select
      className='seleccion'
      onChange={(e) => handleChange(e)}>
        <option
         value='all'
        >ALL</option>
        { allTemp.map(t =>(
        <option
            value={t.name}
            key={t.id}
            >{t.name}
        </option>
        ))}
      </select>
    </div>)
}