import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './Components/Clase 17, 18 y 19/Home';
import PokeList from './Components/Clase 17, 18 y 19/PokeList';
import Pokemon from './Components/Clase 17, 18 y 19/Pokemon';
import PokeTypes from './Components/Clase 17, 18 y 19/PokeTypes';
import NotFound from './Components/Clase 17, 18 y 19/NotFound'
import { useState } from 'react';
import UseMemo from './Components/Clase 20/UseMemo';
import Home from './Components/Clase 23/Home';

function App() {

  const [loading, setLoading] = useState(false)


   return (
    <div className="App">
      <Home/>
      {/* <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='pokemon' element={<PokeList setLoading={setLoading}/>}>
            <Route path=':pokeName' element={<Pokemon loading={loading} setLoading={setLoading}/>}/>
          </Route>
          <Route path='type' element={<PokeTypes/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
