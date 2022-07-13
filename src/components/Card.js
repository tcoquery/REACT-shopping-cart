const Card = (props) => {
    return (
        <div>
            {props.plants.map((plant) => {
                return <div key={plant.id}>
                        <img alt={plant.name} src={plant.img}/>
                    </div>
            })}
        </div>
    )
};

export default Card;