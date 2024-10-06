// import Food from "./Food";
// import Drinks from "./Drinks";
// import Others from "./Others";
import {AllFoodItems} from "./Food";
import {AllDrinksItems} from "./Drinks";
import {AllOtherItems} from "./Others";
import ItemDescription from "./ItemInteract";
import { useState } from "react";
export const Allitems =  [...AllFoodItems, ...AllDrinksItems, ...AllOtherItems]
export default function Home(){
    const [openModal, setOpenModal] = useState(false);
        return(
        <>
        <ul className="container">
        {Allitems.map((item, index) => (<li key={index} className='item'>
        <div onClick={() => setOpenModal(true)} 
            className="item-center">
            <img className='img' src={item.image} alt="ShitImage"></img>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
        </div>  
            <button>Add to cart</button>
        </li>
        ))}
        </ul>
        <ItemDescription open={openModal} onClose={() => setOpenModal(false)} description={"This is the product description"} /> 
        </>
    )
}