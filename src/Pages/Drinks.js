
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useCart } from "../Context";
import { useItem } from '../components/products-context';
import SkeletonLoading from '../components/skeleton-loading';

export default function Drinks() {
    const { products, isLoading } = useItem();
    const { addToCart, cartItems } = useCart();
    if (isLoading) {
        return (
            <SkeletonLoading />
        )
    }
    return (
        <>
            <ul className='no-list container'>
                {products.filter(item => item.type === "drinks").map((item) => (
                    <li key={item.id} className='item'>
                        <Link to={`/item/${item.id}`}
                            className='item-center no-link'>
                            <img className='img' src={item.image} alt="ShitImage"></img>
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                        </Link>
                        <button onClick={() => addToCart(item.id)}>Add to cart
                            {cartItems[item.id] > 0 && <>({cartItems[item.id]})</>}
                        </button>
                    </li>
                ))}

            </ul>
        </>
    )

}