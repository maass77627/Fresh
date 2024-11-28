// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from "./NavComp.js"
import Hero from "./Hero.js"
import BasicInfo from "./BasicInfo.js"
import PicComp from "./PicComp.js"
import Menu from "./Menu.js"
import ExtraInfo from "./ExtraInfo.js"
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses.js';

function App() {

  const [menuItem, setMenuItem] = useState("")

  useEffect(() => {
      fetch("http://localhost:3006/food")
      .then((response) => response.json())
      .then((json) => { 
        setMenuItem(json)
        console.log(json)})
  }, [menuItem]) 



  return (
    <div className="App">
     
      <NavComp></NavComp>
      <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/about" element={<BasicInfo />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
     
      <Hero></Hero>
      <BasicInfo></BasicInfo>
      <PicComp></PicComp>
      <ExtraInfo></ExtraInfo>

      <header className="App-header">
        {/* "hellooooo" */}
        {/* <button className='btn btn-warning'>hi</button> */}
      </header> 
      
    </div>
  );
}

export default App;

