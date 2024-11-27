// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from "./NavComp.js"
import Hero from "./Hero.js"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        "hellooooo"
        <button className='btn btn-warning'>hi</button>
      </header> */}
      <NavComp></NavComp>
     
      <Hero></Hero>

      
    </div>
  );
}

export default App;

