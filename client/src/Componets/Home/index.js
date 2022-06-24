import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import Pagination from "../Pagination";
import ImageCard from "../../image/Cards.jpg"
import landing from "../../image/correr-landing.png"
import NavBar from "../NavBar";
import './home.css'
import{
  orderZA,
  orderAZ,
  orderByWeight,
  getTemperaments,
  filter,
  filterTem,
  getAllDogs
} from '../../Redux/Action'

export default function Home() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const allDogs = useSelector((state) => state.dogs);
  console.log('longitud de dogs',allDogs)
  const allTemperaments = useSelector((state) => state.temperaments);
  //-PAGINADO----------------------------------------
  const [page, setPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = page * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  console.log("curremDogs",currentDogs)
  const maximo = allDogs.length / dogsPerPage
  console.log("maximo", maximo)
  const paginado = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
  }, [dispatch]);


  //-ORDENAMIENTOS----------------------------------------
let orderA = (e) =>{
    e.preventDefault()
    dispatch(orderAZ())
    setPage(1);
    setOrder(e.target.value)
}
let orderZ= (e) =>{
    e.preventDefault();
    dispatch(orderZA())
    setPage(1);
    setOrder(e.target.value);
}

  //-Por peso--------------------------------------------
  function handleSortWeight(e) {
    e.preventDefault(e);
    dispatch(orderByWeight(e.target.value));
    setPage(1);
    setOrder(e.target.value);
  }

  //-FILTRADOS-------------------------------------------
  //-Por creacion----------------------------------------
  let filterBy = (e) =>{
    e.preventDefault(e);
    dispatch(filter(e.target.value))
    setPage(1);
    setOrder(e.target.value);
  }
  let allDogss = (e)=>{
    e.preventDefault();
    dispatch(getAllDogs())
    setPage(1);
    setOrder(e.target.value);
}

  //-Por temperamento------------------------------------
  function handleFilterByTemperament(e) {
    e.preventDefault(e);
    dispatch(filterTem(e.target.value));
    setPage(1);
    setOrder(e.target.value);
  }

  return (
    <div className='contenedor-principal'>
      <NavBar />
    <div className='contenedor-orden'>
        <button 
      className='Boton'
      onClick={(e)=> orderA(e)}
      >A a Z</button>
      <button
      className='Boton'
      onClick={(e)=> orderZ(e)}
      >Z a A</button>
        <select className='selectt' onChange={(e) => handleSortWeight(e)}>
            <option value="" disabled >
              Order by weight
            </option>
            <option value="weightasc">Heavier</option>
            <option value="weightdesc">Lighter</option>
         </select>
      <button
       className='Boton'
       value='DATEBASE'
       onClick={(e) => filterBy(e)}
      >perros creados</button>
      <button
      className='Boton'
      value='ALL'
      onClick={(e) => allDogss(e)}
      >todos los peroos</button>
        </div>

        <div className='contenedor-temperament'>
          <select
            className='selectt'
            onChange={(e) => handleFilterByTemperament(e)}>
            <option value="" disabled >
              Filter by temperament
            </option>
            <option value="all">All</option>
            {allTemperaments.map((temp) => (
            <option key={temp.id} value={temp.name}>
                {temp.name}
            </option>
            ))}
          </select>
      <Pagination
         maximo={maximo}
         pageNumber={paginado}
      />
      <div className='card'>
        <ul className='grid'>
          {" "}
          {!currentDogs.length > 0 ?(
        <div className='ver'>
          <p className='verr'>Loading...</p>
          <img src={`${landing}`} alt='dog' />
        </div>
      ) :
          currentDogs.map((d) =>{
            return (
              <div className='Contenedor-card'>
                <Card 
               key={d.id}
               id={d.id}
               name={d.name}
               img={d.image ? d.image : ImageCard}
               temperament={d.temperament}
               weight_max={d.weight_max}
               weight_min={d.weight_min}
             />
          </div>);
          })}
        </ul>
      </div>
    </div>
  </div>
  );
}