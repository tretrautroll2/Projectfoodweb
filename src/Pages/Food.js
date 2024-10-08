import Pork1 from './img/Pork1.webp'
import Pork2 from './img/Pork2.webp'
import Pork3 from './img/Pork3.webp'
import Beef1 from './img/Beef1.webp'
import Beef2 from './img/Beef2.webp'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export const AllFoodItems = [
  {id: 1,
    name: "Legendary Pork",
  price: 200,
  image: Pork1,
  details: "This is the one and only Legendary Pork harvested from the deepest corner of the world. Only true hunters can capture the beast and bring you the long forgotten item"
  },
  {id: 2,
    name: "Mythic Pork",
  price: 150,
  image: Pork2,
  details:""
  },
  {id:3,
    name: "Common Pork",
  price: 50,
  image: Pork3,
  details:""
  },
  {id: 4,
    name: "Legendary Beef",
  price: 300,
  image: Beef1,
  details:""
  },
  {id: 5,
    name: "Mythic Beef",
  price: 250,
  image: Beef2,
  details:""
  }
 ]
export default function Food(){
  // const [selectedItem, setSelectedItem] = useState(null);
  // console.log("Selected item:", selectedItem);

    return(
        <>
        <ul className='no-list container'>
           {AllFoodItems.map((item) =>(
          <li key={item.id} className='item'>
            <Link to={`/item/${item.id}`}
            className='item-center no-link'>
             <img className="img" src={item.image} alt="ShitImage"></img>
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

