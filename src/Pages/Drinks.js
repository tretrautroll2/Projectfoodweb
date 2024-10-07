import Water from './img/Water.jpg'
import Lava from './img/Lava.webp'
import Milk from './img/Milk.webp'
import Coca from './img/Coca.webp'
import Pepsi from './img/Pepsi.webp'
import ItemDescription from './ItemDescription'
import { useState } from 'react'
export const AllDrinksItems = [
    {name: "Milk",
    price: 20,
    image: Milk,
    details:""
    },
    {name: "Water",
    price: 10,
    image: Water,
    details:""
    },
    {name: "Lava",
    price: 300,
    image: Lava,
    details:""
    },
    {name: "CocaCola",
    price: 150,
    image: Coca,
    details:""
    },
    {name: "Pepsi",
    price: 300,
    image: Pepsi,
    details:""
    }
]
export default function Drinks(){
const [openModal, setOpenModal] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
}
    return (
        <>
        <ul className='no-list container'>
        {AllDrinksItems.map((item, index) =>(
          <li key={index} className='item'>  
          <div onClick={() => handleItemClick(item)}
          className='item-center'>
          <img className='img' src={item.image} alt="ShitImage"></img>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          </div>
          <button>Add to cart</button>
      </li>
        ))}
        
     </ul>
     {openModal && selectedItem &&(
        <ItemDescription open={openModal} onClose={() => setOpenModal(false)}
            title={selectedItem.name} description={selectedItem.details} />
        
     )}
     </>
    )

}