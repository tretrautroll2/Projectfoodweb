import Pork1 from './img/Pork1.webp'
import Pork2 from './img/Pork2.webp'
import Pork3 from './img/Pork3.webp'
import Beef1 from './img/Beef1.webp'
import Beef2 from './img/Beef2.webp'
import ItemDescription from './ItemDescription'
import { useState } from 'react'
export const AllFoodItems = [
  {name: "Legendary Pork",
  price: 200,
  image: Pork1,
  details: "This is the one and only Legendary Pork harvested from the deepest corner of the world. Only true hunters can capture the beast and bring you the long forgotten item"
  },
  {name: "Mythic Pork",
  price: 150,
  image: Pork2,
  details:""
  },
  {name: "Common Pork",
  price: 50,
  image: Pork3,
  details:""
  },
  {name: "Legendary Beef",
  price: 300,
  image: Beef1,
  details:""
  },
  {name: "Mythic Beef",
  price: 250,
  image: Beef2,
  details:""
  }
 ]
export default function Food(){
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {  
  console.log("Item clicked:", item);
   setSelectedItem(item);
   setOpenModal(true); 
  };
  console.log("Modal open:", openModal);
  console.log("Selected item:", selectedItem);

    return(
        <>
        <ul className='no-list container'>
           {AllFoodItems.map((item, index) =>(
          <li key={index} className='item'>
            <div onClick={() => handleItemClick(item)}
            className='item-center'>
             <img className="img" src={item.image} alt="ShitImage"></img>
             <h2>{item.name}</h2>
             <p>Price: {item.price}</p>
            </div>
             <button>Add to cart</button>
             
         </li>
           ))}   
        </ul>
        {openModal && selectedItem && (<ItemDescription open={openModal} 
        onClose={() => setOpenModal(false)} title={selectedItem.name} description={selectedItem.details} />)}
         
        </>
    )
}

