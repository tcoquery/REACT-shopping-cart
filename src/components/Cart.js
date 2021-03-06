const Cart = (props) => {

    const arrayCount = (arr, id) => {
        return arr.filter(x => x===id).length;
    }

    let total = 0;

    return (
        <div>
            {props.plants.map((plant) => {
                if(props.cart.includes(plant.id)) {
                    total += plant.price * arrayCount(props.cart, plant.id)
                return <div key={plant.id}>
                    <img alt={plant.name} src={plant.img}/>
                    <p>{plant.name}</p>
                    <p>Quantity : <button onClick={() => {props.removeFromCart(props.cart, plant.id)}}>-</button> {arrayCount(props.cart, plant.id)} <button onClick={() => {props.addToCart(plant.id)}}>+</button></p>
                    <p>Subtotal : {plant.price * arrayCount(props.cart, plant.id)} €</p>
                </div>
                }
            })}
            <p>Total : {total} €</p>
            <button >Checkout</button>
        </div>
    )
}

export default Cart;