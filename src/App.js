import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Clase 17, 18 y 19/Home';
import PokeList from './Components/Clase 17, 18 y 19/PokeList';
import Pokemon from './Components/Clase 17, 18 y 19/Pokemon';
import PokeTypes from './Components/Clase 17, 18 y 19/PokeTypes';
import NotFound from './Components/Clase 17, 18 y 19/NotFound'
import Login from './Components/Clase 26/Login';
import {Auth} from './Components/Clase 26/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Components/Clase 23/Home';

function App() {

  const [loading, setLoading] = useState(false)
  console.log(Auth())
   return (
    <div className="App">
      <Login/>
      <Routes>
        <Route path='/' element={Auth() ? <Home/> : <NotFound/>}>
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
