import { useState } from 'react';
import './App.css';
import Header from './Components/Clase 12/Header';
import SelectPoke from './Components/Clase 12/SelectPoke';
import pokedex from './pokedex.json'

function App() {

  const [pokeSel, setPokeSel] = useState({
    id: 0,
    name: '',
    type: [
      ''
    ],
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      SpAttack: 0,
      SpDefense: 0,
      Speed: 0
    }
  })

  return (
    <div className="App">
      <Header pokeSel={pokeSel}/>
      <SelectPoke 
        pokedex={pokedex} 
        setPokeSel={setPokeSel}
      />
    </div>
  );
}

export default App;
