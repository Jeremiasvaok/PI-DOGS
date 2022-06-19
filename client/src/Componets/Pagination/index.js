import './Pagination.css'

export default function Paginacion({pageNumber, maximo, page, setPage}){
 
    const pagesNumber = [];
    for(let i = 1; i<= Math.ceil(maximo); i++){
        pagesNumber.push(i)
    }
 //  console.log(pagesNumber)
     return(
        <nav className="contenedor-paginacion">
            <ul className="contenedor-paginas">
                    {
                 pageNumber && pagesNumber.map((number) =>{
                     return(
                        <li
                        className="contenedor-numeros"
                        key={number}
                        onClick={() => pageNumber(number)}
                        >
                         {number}
                        </li>)
                 })}
            </ul>
        </nav>
     )
}