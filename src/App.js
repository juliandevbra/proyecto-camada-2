import './App.css';
import { useState } from 'react';
import ClassDidMount from './Components/Clase 14/ClassDidMount';
import FuncUseEffect from './Components/Clase 14/FuncUseEffect';
import UseEffect from './Components/Clase 14/UseEffect';



function App() {

  const [show, setShow] = useState(false)

   return (
    <div className="App">
      {/* {show ? <ClassDidMount/> : <FuncUseEffect/>}
      <button onClick={() => setShow(!show)} >Cambiar componente</button> */}
      <UseEffect/>
    </div>
  );
}

export default App;
