import './Pagination.css'

export default function Paginacion({pageNumber, maximo, page, setPage}){
 
    const pagesNumber = [];
    for(let i = 1; i<= Math.ceil(maximo); i++){
        pagesNumber.push(i)
    }
 //  console.log(pagesNumber)
 const handleChangeNext = (e) =>{
    e.preventDefault();
    setPage(page + 1)
 }
 const handleChangePrevius = (e) =>{
    e.preventDefault();
    setPage(page - 1)
 }
     return(
        <nav className="contenedor-paginacion">
            <div className="contenedor-paginas">
                <div
                 disabled={page < 1 || page === 1}
                 className='contenedor-sigiente'
                 onChange={handleChangeNext}
                 >Next</div>
                    {
                 pageNumber && pagesNumber.map((number) =>{
                     return(
                        <a href='#'
                        className="contenedor-numeros"
                        key={number}
                        onClick={() => pageNumber(number)}
                        >
                         {number}
                        </a>
                     )
                 })
                }
                 <div
                 disabled={page < 22}
                 className='contenedor-previo'
                 onChange={handleChangePrevius}
                 >previus
                 </div>
            </div>
        </nav>
     )
}