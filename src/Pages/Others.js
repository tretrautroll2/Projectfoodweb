import DiamondSword from './img/DiamondSword.webp'
import Dirt from './img/Dirt.webp'
import Saddle from './img/Saddle.webp'
import Stick from './img/Stick.webp'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export const AllOtherItems = [
    {id: 11,
    name: "Diamond Sword",
    price: 3000,
    image: DiamondSword,
    details:"" 
    },
    {id: 12,
    name: "Dirt",
    price: 4000,
    image: Dirt,
    details:""
    },
    {id: 13,
    name: "Saddle",
    price: 100000,
    image: Saddle,
    details:""
    },
    {id: 14,
    name: "Legendary Stick",
    price: 3000000,
    image: Stick,
    details:""
    }
]
export default function Others(){
// const [selectedItem, setSelectedItem] = useState(null);
    return(
        <>
        <ul className="no-list container">
        {AllOtherItems.map((item) => (<li key={item.id} className='item'>
            <Link to={`/Item/${item.id}`}
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