import Water from './img/Water.jpg'
import Lava from './img/Lava.webp'
import Milk from './img/Milk.webp'
import Coca from './img/Coca.webp'
import Pepsi from './img/Pepsi.webp'
export const AllDrinksItems = [
    {name: "Milk",
    price: 20,
    image: Milk
    },
    {name: "Water",
    price: 10,
    image: Water
    },
    {name: "Lava",
    price: 300,
    image: Lava
    },
    {name: "CocaCola",
    price: 150,
    image: Coca
    },
    {name: "Pepsi",
    price: 300,
    image: Pepsi
    }
]
export default function Drinks(){
    
    return (
        <>
        <ul className='no-list container'>
        {AllDrinksItems.map((item, index) =>(
          <li key={index} className='item'>  
          <img className='img' src={item.image} alt="ShitImage"></img>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <button>Add to cart</button>
      </li>
        ))}
        
     </ul>
     </>
    )

}