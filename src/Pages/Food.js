import Pork1 from './img/Pork1.webp'
import Pork2 from './img/Pork2.webp'
import Pork3 from './img/Pork3.webp'
import Beef1 from './img/Beef1.webp'
import Beef2 from './img/Beef2.webp'
export const AllFoodItems = [
  {name: "Legendary Pork",
  price: 200,
  image: Pork1
  },
  {name: "Mythic Pork",
  price: 150,
  image: Pork2
  },
  {name: "Common Pork",
  price: 50,
  image: Pork3
  },
  {name: "Legendary Beef",
  price: 300,
  image: Beef1
  },
  {name: "Mythic Beef",
  price: 250,
  image: Beef2
  }
 ]
export default function Food(){


    return(
        <>
        <ul className='no-list container'>
           {AllFoodItems.map((item, index) =>(
          <li key={index} className='item'>
             <img className="img" src={item.image} alt="ShitImage"></img>
             <h2>{item.name}</h2>
             <p>Price: {item.price}</p>
             <button>Add to cart</button>
         </li>
           ))}
           
        </ul>
        </>
    )
}

