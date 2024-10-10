

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useCart } from "../Context";
import { AllFoodItems } from "../Pages/Food";
import { AllDrinksItems } from '../Pages/Drinks';
import { AllOtherItems } from '../Pages/Others';

export const Allitems = [...AllFoodItems, ...AllDrinksItems, ...AllOtherItems]

const CartItem = () => {

    const { addToCart, cartItems } = useCart();
    if (!Allitems) return null
    return (
        <>
            <ul className="container">
                {Allitems.map((item) => {
                    console.log("Log", cartItems[item.id])

                    return (
                        <li key={item.id} className='item'>
                            <Link to={`/item/${item.id}`} className="item-center no-link">
                                <img className='img' src={item.image} alt="ShitImage"></img>
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
                            </Link>
                            <button onClick={() => addToCart(item.id)}>Add to cart
                                {cartItems && cartItems[item.id] > 0 && <>({cartItems[item.id]})</>}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default CartItem