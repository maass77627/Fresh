// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from "./NavComp.js"
import Hero from "./Hero.js"
import BasicInfo from "./BasicInfo.js"
import PicComp from "./PicComp.js"
import Menu from "./Menu.js"
import ExtraInfo from "./ExtraInfo.js"
import Footer from "./Footer.js"
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses.js';

function App() {

  const [menuItems, setMenuItems] = useState("")
  const [wines, setWines] = useState("")

  useEffect(() => {
      fetch("http://localhost:3006/food")
      .then((response) => response.json())
      .then((json) => { 
        setMenuItems(json)
        console.log(json)})
  }, []) 

  useEffect(() => {
    fetch("http://localhost:3006/wine")
    .then((response) => response.json())
    .then((json) => { 
      setWines(json)
      console.log(json)})
}, []) 



  return (
    <div className="App">
     
      <NavComp></NavComp>
      <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          <Route path="/location" element={<BasicInfo />} />
          <Route path="/menu" element={<Menu wines={wines} menuItems={menuItems}/>} />
          <Route path="/about" element={<ExtraInfo />} />
      </Routes>
     
      <Hero></Hero>
      <BasicInfo></BasicInfo>
      <PicComp></PicComp>
      <ExtraInfo></ExtraInfo>
      <Footer></Footer>

      <header className="App-header">
        <p>this is where the header is</p>
      </header> 
      
    </div>
  );
}

export default App;

