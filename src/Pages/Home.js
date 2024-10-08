// import Food from "./Food";
// import Drinks from "./Drinks";
// import Others from "./Others";
import {AllFoodItems} from "./Food";
import {AllDrinksItems} from "./Drinks";
import {AllOtherItems} from "./Others";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export const Allitems =  [...AllFoodItems, ...AllDrinksItems, ...AllOtherItems]

export default function Home(){
        return(
        <> 
        <ul className="container">
        {Allitems.map((item) => (<li key={item.id} className='item'>
        <div
            className="item-center">
            <Link to={`/item/${item.id}`} className="item-center no-link">
            <img className='img' src={item.image} alt="ShitImage"></img>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            </Link>
       
        </div>    
            <button>Add to cart</button>  
        </li>
        ))}
        </ul>
        </>
    )
}