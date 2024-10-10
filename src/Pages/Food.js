
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useCart } from '../Context'
import { Allitems } from "../Allitems";


export const AllFoodItems = [

]
export default function Food() {
  // const [selectedItem, setSelectedItem] = useState(null);
  // console.log("Selected item:", selectedItem);
  const { addToCart, cartItems } = useCart();

  if (!Allitems) return null

  return (
    <>
      <ul className='no-list container'>
        {Allitems.filter(item => item.type === 'food').map((item) => (
          <li key={item.id} className='item'>
            <Link to={`/item/${item.id}`}
              className='item-center no-link'>
              <img className="img" src={item.image} alt="ShitImage"></img>
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

