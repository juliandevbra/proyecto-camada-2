import { useState } from 'react';
import './App.css';
import Header from './Components/Clase 13/Header';
import Shop from './Components/Clase 13/Shop';


function App() {

  const [total, setTotal] = useState({
    precio: 0,
    stock: 0
  })

  return (
    <div className="App">
        <Header total={total}/>
        <Shop total={total} setTotal={setTotal}/>
    </div>
  );
}

export default App;
