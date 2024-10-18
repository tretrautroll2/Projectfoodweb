
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useCart } from "../Context";
import { useItem } from './products-context';


const CartItem = () => {
    const { products } = useItem();
    const { addToCart, cartItems } = useCart();
    console.log('products in Cartitem:', products);
    if (!products) return null
    return (
        <>
            <ul className="container">
                {products.map((item) => {

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