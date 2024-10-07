// import Food from "./Food";
// import Drinks from "./Drinks";
// import Others from "./Others";
import {AllFoodItems} from "./Food";
import {AllDrinksItems} from "./Drinks";
import {AllOtherItems} from "./Others";
import ItemDescription from "./ItemDescription";
import { useState } from "react";
import { Router, Link } from "react-router-dom";
export const Allitems =  [...AllFoodItems, ...AllDrinksItems, ...AllOtherItems]
export default function Home(){
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item) => {
        setSelectedItem(item);
    }
        return(
        <>
        <ul className="container">
        {Allitems.map((item, index) => (<li key={index} className='item'>
        <div onClick={() => handleItemClick(item)} 
            className="item-center">
            <img className='img' src={item.image} alt="ShitImage"></img>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
       
        </div>       
            <button>Add to cart</button>  
        </li>
        ))}
        </ul>
        {selectedItem &&(
        <ItemDescription open={selectedItem} onClose={() => setSelectedItem(null)}
             title={selectedItem.name} description={selectedItem.details} /> 
        )}
        </>
    )
}