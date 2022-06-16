import Home from '../Home'
import SearchBar from '../SearchBar'

export default function NavBar(){
  return(
    <div>
          <div>{<SearchBar/>}</div>
          <div>{<Home/>}</div>
    </div>
  )
}