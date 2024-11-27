// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from "./NavComp.js"
import Hero from "./Hero.js"
import BasicInfo from "./BasicInfo.js"
import PicComp from "./PicComp.js"

function App() {
  return (
    <div className="App">
     
      <NavComp></NavComp>
     
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

