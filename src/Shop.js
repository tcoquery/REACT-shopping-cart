import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cart from "./components/Cart";
import React, {useState} from "react";
import uniqid from "uniqid";
import aglaonema from "./img/aglaonema.jpg"
import alocasia from "./img/alocasia.jpg"
import calathea from "./img/calathea.jpg"
import monstera from "./img/monstera.jpg"
import peaceLily from "./img/peace-lily.jpg"
import pothos from "./img/pothos.jpg"
import spiderPlant from "./img/spider-plant.jpg"
import yucca from "./img/yucca.jpg"

const Shop = () => {
    const [plants, setPlants] = useState([
        {id:uniqid(), name:'Aglaonema', img:aglaonema, quantity:1, price:13.99},
        {id:uniqid(), name:'Alocasia', img:alocasia, quantity:1, price:11.99},
        {id:uniqid(), name:'Calathea', img:calathea, quantity:1, price:8.99},
        {id:uniqid(), name:'Monstera', img:monstera, quantity:1, price:15.99},
        {id:uniqid(), name:'Peace-lily', img:peaceLily, quantity:1, price:7.99},
        {id:uniqid(), name:'Pothos', img:pothos, quantity:1, price:5.99},
        {id:uniqid(), name:'Spider-plant', img:spiderPlant, quantity:1, price:9.99},
        {id:uniqid(), name:'Yucca', img:yucca, quantity:1, price:10.99}
      ]);
    const [cart, setCart] = useState([]);

    const addCartItem = (id, quantity) => {
        const newCart = [];
        for(let i = 0; i < quantity; i++) {
            newCart.push(id)
        }
        setCart(cart.concat(newCart));
    }

    const handleQuantity = (e) => {
        const {name, value} = e.target
        const newPlants = plants.map(plant => {
            if(name === plant.name) {
                return {...plant, quantity: parseInt(value)}
            }
            return plant;
        })
		setPlants(newPlants);
    }
    
    const removeFromCart = (arr, value) => {
        const index = arr.indexOf(value);

        setCart([
            ...cart.slice(0, index),
            ...cart.slice(index+1, cart.length)
        ]);            
    }

    const addToCart = (value) => {
        const newArr = [];
        newArr.push(value);
        setCart(cart.concat(newArr));
    }

    const showCart = () => {
        const cart = document.getElementById("cart");
        cart.style.right = 0;
    }

    return (
        <div>
          <Navbar />
          <div class="flex">
            <Card plants={plants} cart={cart} onChange={handleQuantity} onClick={addCartItem} showCart={showCart}/>
            <Cart cart={cart} plants={plants} removeFromCart={removeFromCart} addToCart={addToCart}/>
          </div>
        </div>
      );
}

export default Shop;