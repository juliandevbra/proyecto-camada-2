import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Clase 17 y 18/Home';
import PokeList from './Components/Clase 17 y 18/PokeList';
import Pokemon from './Components/Clase 17 y 18/Pokemon';
import PokeTypes from './Components/Clase 17 y 18/PokeTypes';
import NotFound from './Components/Clase 17 y 18/NotFound'
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false)

   return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='pokemon' element={<PokeList setLoading={setLoading}/>}>
            <Route path=':pokeName' element={<Pokemon loading={loading} setLoading={setLoading}/>}/>
          </Route>
          <Route path='type' element={<PokeTypes/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
