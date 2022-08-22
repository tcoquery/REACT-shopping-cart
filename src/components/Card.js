const Card = (props) => {
    return (
        <div class="container mx-auto grid grid-cols-3 grid-rows-3 gap-6">
            {props.plants.map((plant) => {
                return <div key={plant.id} class="w-full bg-white rounded-lg shadow-md ">
                            <img alt={plant.name} src={plant.img}/>
                            <div class="px-5 pb-5">
                                <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">{plant.name}</h5>
                                <div class="flex justify-between items-center">
                                    <span class="text-2xl font-bold text-gray-900 dark:text-white">{plant.price} €</span>
                                    <input onChange={props.onChange} name={plant.name} type="number" class="block p-2 w-24 bg-gray-50 border border-gray-300  rounded-lg " placeholder="0"></input>
                                    <button class="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={()=>{props.onClick(plant.id, plant.quantity); props.showCart()}}>Add to cart</button>
                                </div>
                            </div>
                        </div>
            })}
        </div>
    )
};

export default Card;