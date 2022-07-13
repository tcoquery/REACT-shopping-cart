import Navbar from "./components/Navbar";
import Card from "./components/Card";
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
        {id:uniqid(), name:'aglaonema', img:aglaonema},
        {id:uniqid(), name:'alocasia', img:alocasia},
        {id:uniqid(), name:'calathea', img:calathea},
        {id:uniqid(), name:'monstera', img:monstera},
        {id:uniqid(), name:'peace-lily', img:peaceLily},
        {id:uniqid(), name:'pothos', img:pothos},
        {id:uniqid(), name:'spider-plant', img:spiderPlant},
        {id:uniqid(), name:'yucca', img:yucca}
      ]);

    return (
        <div>
          <Navbar />
          <Card plants={plants}/>
          <p>All photos by <a href="http://www.feey.ch">Feey</a></p>
        </div>
      );
}

export default Shop;