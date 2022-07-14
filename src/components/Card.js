const Card = (props) => {
    return (
        <div>
            {props.plants.map((plant) => {
                return <div key={plant.id}>
                        <img alt={plant.name} src={plant.img}/>
                        <p>{plant.name}</p>
                        <p>{plant.price} €</p>
                        <input onChange={props.onChange} name={plant.name} type="number"></input>
                        <button onClick={()=>{props.onClick(plant.id, plant.quantity)}}>Add to cart</button>
                    </div>
            })}
        </div>
    )
};

export default Card;