

function Food({ item }) {

    return(
        <div id="menuitem">
        <h3 id="h3">{item.name}</h3>
        <h5 id="h5">{item.ingredients}</h5>
        <img id="foodimg" src={item.image} alt="pizza"></img>
        <h3 id="price">{item.price}</h3>
        
        
        </div>
    )
}

export default Food