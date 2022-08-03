
import './App.css';
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
import {Games} from './components/Games';
import NavbarApp from '../src/components/Navbar/NavbarApp';
import SliderApp from './components/Sliders/SliderApp';


function App() {
  return (
    <div className="App">
      <NavbarApp />
      <SliderApp />
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games" element={<Games />} />
      </Routes>
 
    </div>
  );
}

export default App;
