

function Food({ item }) {

    return(
        <div id="menuitem">
        <h3>{item.name}</h3>
        <h5>{item.ingredients}</h5>
        <img src={item.image} alt="pizza"></img>
        <h3>{item.price}</h3>
        
        
        </div>
    )
}

export default Food