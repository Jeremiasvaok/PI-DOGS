import { Link } from "react-router-dom";
import Card from "../Card";
import { getAllDogs } from "../../Redux/Action"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import Paginacion from "../Pagination";
import SearchBar from "../SearchBar";
import Order from "../Order";

export default function Home(){

    const dog = useSelector(state => state.dogs)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllDogs())
    }, [dispatch])
     
    //paginacion
    const [page, setPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] =useState(8)
    //length 172
    const maximo = dog.length / dogsPerPage
    const pages = (pageNumber) => setPage(pageNumber)
      
    return(
    <div>
        <div>
          {<Paginacion 
              page={page}
              setPage={setPage}
              maximo={maximo}
              pageNumber={pages}
            />}
         </div>
         <br/>
         <div>
              {<Order/>}
            </div>
           <div className='Contenedor-card'>{
             dog && dog?.slice(
                (page - 1) * dogsPerPage,
                (page - 1) * dogsPerPage + dogsPerPage).map( d =>{
               return <Card 
               key={d.id}
               id={d.id}
               name={d.name}
               img={d.img}s
               temperaments={d.temperaments}
               weight={d.weight}
             />})
          }</div>
           <div>{<SearchBar/>}</div>
            <Link to='/createdog'>Create un perro</Link>
        </div>
    )
}