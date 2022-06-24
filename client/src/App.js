import { Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Landing from './Componets/Landing';
import Home from './Componets/Home';
import CreateDog from './Componets/CreateDog';
import Details from './Componets/Details'
import Error from './Componets/Error';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route path='/createdog' component={CreateDog} />
      <Route path='/dogs/:id' component={Details} />
      <Route path= '*' component = {Error}/>
    </Switch>
  </BrowserRouter>
    </div>
  );
}


export default App;