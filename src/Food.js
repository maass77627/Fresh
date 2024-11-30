import { useState } from "react";

function Food({ item }) {
    const [toggle, setToggle] = useState(true)

    function handleHover() {
        setToggle(!toggle)
    }
    const color = toggle ? "white" : "Gainsboro"

    return(
        <div style={{ background: color }} onMouseEnter={handleHover} onMouseLeave={handleHover} id="menuitem">
        <h3 id="h3">{item.name}</h3>
        <h5 id="h5">{item.ingredients}</h5>
        <img id="foodimg" src={item.image} alt="pizza"></img>
        <h3 id="price">{item.price}</h3>
        </div>
    )
}

export default Food