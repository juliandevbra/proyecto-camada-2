import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Clase 17/Home';
import PokeList from './Components/Clase 17/PokeList';
import Pokemon from './Components/Clase 17/Pokemon';
import PokeTypes from './Components/Clase 17/PokeTypes';
import NotFound from './Components/Clase 17/NotFound'

function App() {

   return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='pokemon' element={<PokeList/>}>
            <Route path=':pokeName' element={<Pokemon/>}/>
          </Route>
          <Route path='type' element={<PokeTypes/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
