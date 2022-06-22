import { Route } from 'react-router-dom';
import './App.css';
import Landing from './Componets/Landing';
import Home from './Componets/Home';
import CreateDog from './Componets/CreateDog';
import Details from './Componets/Details'

function App() {
  return (
    <div className="App">
      <Route exact path='/'  component={Landing} />
      <Route path='/home' component={Home} />
      <Route path='/createdog' component={CreateDog} />
      <Route path='/dogs/:id' component={Details} />
    </div>
  );
}


export default App;