import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Clase 16/About';
import Contact from './Components/Clase 16/Contact';
import Home from './Components/Clase 16/Home';
import NotFound from './Components/Clase 16/NotFound';

function App() {

   return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='about' element={<About/>}/>
          <Route path='contacto' element={<Contact/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;


