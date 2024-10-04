import DiamondSword from './img/DiamondSword.webp'
import Dirt from './img/Dirt.webp'
import Saddle from './img/Saddle.webp'
import Stick from './img/Stick.webp'
export const AllOtherItems = [
    {name: "Diamond Sword",
    price: 3000,
    image: DiamondSword 
    },
    {name: "Dirt",
    price: 4000,
    image: Dirt
    },
    {name: "Saddle",
    price: 100000,
    image: Saddle
    },
    {name: "Legendary Stick",
    price: 3000000,
    image: Stick
    }
]
export default function Others(){

    return(
        <>
        <ul className="no-list container">
        {AllOtherItems.map((item, index) => (<li key={index} className='item'>
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