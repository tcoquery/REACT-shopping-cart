const Cart = (props) => {

    const arrayCount = (arr, id) => {
        return arr.filter(x => x===id).length;
    }

    let total = 0;

    return (
        <div class=" fixed -right-96 flex flex-col h-full border-l border-grey-800 shadow-md w-96 pt-14" id="cart">
            {props.plants.map((plant) => {
                if(props.cart.includes(plant.id)) {
                    total += plant.price * arrayCount(props.cart, plant.id)
                return <div key={plant.id}>
                    <div class="flex mb-auto ml-6 mt-6" >                    
                        <img class="w-20 h-auto" alt={plant.name} src={plant.img}/>
                        <div class="flex flex-col ml-5 justify-between">                        
                            <p class="text-xl font-bold">{plant.name}</p>
                            <div>
                                <p>Quantity :</p>
                                <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-2.5 py-1" onClick={() => {props.removeFromCart(props.cart, plant.id)}}>-</button> 
                                <span> {arrayCount(props.cart, plant.id)} </span>
                                <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-2.5 py-1" onClick={() => {props.addToCart(plant.id)}}>+</button>
                            </div>

                        </div>
                    </div>
                    
                    <p class="ml-6 mt-2">Subtotal : {plant.price * arrayCount(props.cart, plant.id)} €</p>
                </div>
                }
            })}
            
                <p class="ml-6 font-bold">Total : {total} €</p>
                <button class="mt-auto text-white text-xl font-bold bg-green-800 p-5">Checkout</button>

        </div>
    )
}

export default Cart;