import { useLocation } from "react-router-dom";

function ExtraInfo() {

    let location = useLocation()


    return (
        <div   id={location.pathname === "/about" ? "routeextrainfo" : "extrainfo"} >
            <p id="about">Fresh is a farm to table restaurant bringing you pizzas made with only 
            the freshest and highest quality ingredients straight from the garden. We are a family 
            of farmers who have been perfecting our pizzas for the last 20 years. We grow all our 
            ingredients straight on the farm and love to come up with new innovative recipes inspired 
            by the produce that we produce. Coming to fresh is a warm family experience where you can 
            indulge in all of the fresh goodness that our pizzas has to offer. </p>

                <img id="cheers" src="pizzacheer.jpg" alt="cheer"></img>

            <p id="party">You can book special events or reserve a table at our restaurunt. </p>

        </div>
    )
}

export default ExtraInfo