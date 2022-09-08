import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Clase 17/Home';
import PokeList from './Components/Clase 17/PokeList';
import Pokemon from './Components/Clase 17/Pokemon';
import PokeTypes from './Components/Clase 17/PokeTypes';

function App() {

   return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='pokemon' element={<PokeList/>}>
            <Route path=':pokeName' element={<Pokemon/>}/>
          </Route>
          <Route path='types' element={<PokeTypes/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
