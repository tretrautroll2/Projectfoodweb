import Water from './img/Water.jpg'
import Lava from './img/Lava.webp'
import Milk from './img/Milk.webp'
import Coca from './img/Coca.webp'
import Pepsi from './img/Pepsi.webp'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export const AllDrinksItems = [
    {id: 6,
    name: "Milk",
    price: 20,
    image: Milk,
    details:""
    },
    {id: 7,
    name: "Water",
    price: 10,
    image: Water,
    details:""
    },
    {id: 8,
    name: "Lava",
    price: 300,
    image: Lava,
    details:""
    },
    {id: 9,
    name: "CocaCola",
    price: 150,
    image: Coca,
    details:""
    },
    {id: 10,
    name: "Pepsi",
    price: 300,
    image: Pepsi,
    details:""
    }
]
export default function Drinks(){
// const [selectedItem, setSelectedItem] = useState(null);
    return (
        <>
        <ul className='no-list container'>
        {AllDrinksItems.map((item) =>(
          <li key={item.id} className='item'>  
          <Link to={`/item/${item.id}`}
          className='item-center no-link'>
          <img className='img' src={item.image} alt="ShitImage"></img>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          </Link>
          <button>Add to cart</button>
      </li>
        ))}
        
     </ul>
     </>
    )

}