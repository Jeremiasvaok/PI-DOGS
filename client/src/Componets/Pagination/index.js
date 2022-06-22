import React from 'react'
import './Pagination.css'

export default function Paginacion({ pageNumber, maximo }){
 
    const pagesNumber = [];
    for(let i = 1; i<= Math.ceil(maximo); i++){
        pagesNumber.push(i)
    }
     return(
        <nav className="contenedor-paginacion">
            <ul className="contenedor-paginas">{
                 pageNumber && pagesNumber.map((number) =>{
                     return(
                    <li className="contenedor-numeros"
                        key={number}
                        onClick={() => pageNumber(number)}>
                        {number}
                    </li>)
                 })}
            </ul>
        </nav>
     )}