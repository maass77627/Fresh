

function Wine({ wine }) {


    return(
        <div id="wine">
            <h3 id="h3">{wine.name}</h3>
        {/* <h5 id="h5">{item.ingredients}</h5> */}
            <img id="wineimg" src={wine.image} alt="wine"></img>
            <h3 id="price">{wine.price}</h3>

        </div>
    )
}

export default Wine