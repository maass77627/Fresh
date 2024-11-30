//import { UNSAFE_DataWithResponseInit } from "react-router-dom"
import Food from "./Food"
import Wine from "./Wine"

function Menu({menuItems, wines}) {
    console.log(menuItems)

    // function handleHover() {

    // }



    return(
        <div  id="menu">
            <h1 id="menutitle">Menu</h1>
            {/* <p>This is all the food</p> */}
            {menuItems.map((item) => <Food key={item.id} item={item}></Food>)}
            {wines.map((wine) => <Wine key={wine.id} wine={wine}></Wine>)}
        </div>
    )
}

export default Menu