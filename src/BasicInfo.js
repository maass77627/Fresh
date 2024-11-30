import { useLocation } from "react-router-dom";

function BasicInfo() {

    
        let location = useLocation()
    


    

    return (
        <div id = {location.pathname === "/location" ? "routebasicinfo" : "basicinfo"}>
            <img id="inside" src="freshinside.jpg" alt="inside"></img>
            <h1 id="loctitle">Location</h1>
            
            <p id="loc">
                West Ave.<br></br>
                Austin, TX 78765<br></br>
                Contact: 512-555-0976
            </p>

            <button id="button">menu</button>

            <img id="outside" src="freshoutside.jpg" alt="inside"></img>
        </div>
    )
}

export default BasicInfo