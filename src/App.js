// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from "./NavComp.js"
import Hero from "./Hero.js"
import BasicInfo from "./BasicInfo.js"
import PicComp from "./PicComp.js"
import Menu from "./Menu.js"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <NavComp></NavComp>
      <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/about" element={<BasicInfo />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
     
      <Hero></Hero>
      <BasicInfo></BasicInfo>
      <PicComp></PicComp>

      <header className="App-header">
        "hellooooo"
        <button className='btn btn-warning'>hi</button>
      </header> 
      
    </div>
  );
}

export default App;

