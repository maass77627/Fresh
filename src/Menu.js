import Food from "./Food"

function Menu({menuItems}) {
    console.log(menuItems)

    // function handleHover() {

    // }



    return(
        <div  id="menu">
            <h1 id="menutitle">Menu</h1>
            {/* <p>This is all the food</p> */}
            {menuItems.map((item) => <Food key={item.id} item={item}></Food>)}
        </div>
    )
}

export default Menu