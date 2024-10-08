import Water from './img/Water.webp'
import Lava from './img/Lava.webp'
import Milk from './img/Milk.webp'
import Coca from './img/Coca.webp'
import Pepsi from './img/Pepsi.webp'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
export const AllDrinksItems = [
    {id: 6,
    name: "Milk",
    price: 20,
    image: Milk,
    details:"Introducing Milk, nature's purest elixir, celebrated for its creamy richness and versatility. This timeless beverage, sourced from the finest dairy animals, embodies the essence of nourishment and comfort. With its smooth texture and subtly sweet flavor, Milk invites you to indulge in its wholesome goodness, whether enjoyed on its own, poured over cereal, or blended into delightful smoothies. Packed with essential nutrients like calcium, vitamins, and protein, it nurtures both body and soul, making it a staple in kitchens around the world. From classic recipes to innovative culinary creations, Milk elevates every dish, bringing a touch of nostalgia and a sense of warmth to every sip. Embrace the simple yet profound joy of Milk—a timeless companion that enriches your everyday moments."
    },
    {id: 7,
    name: "Water",
    price: 10,
    image: Water,
    details:"Introducing Water, the vital essence of life that flows through every ecosystem and nourishes all living beings. Clear and refreshing, this pure elixir embodies simplicity while holding the power to revitalize and rejuvenate. Each drop is a testament to nature’s perfection, quenching thirst and restoring balance with its unparalleled clarity and crispness. Water serves as the foundation for countless culinary creations, enhancing flavors and harmonizing ingredients in a way that only it can. Whether cascading over ice in a chilled glass, sparkling with effervescence, or mingling in soothing herbal teas, Water is a source of comfort and clarity. Celebrate the miracle of Water—a timeless, essential companion that nourishes the body, invigorates the spirit, and connects us all to the world around us."
    },
    {id: 8,
    name: "Lava",
    price: 300,
    image: Lava,
    details:"Introducing Lava, the mesmerizing force of nature that captivates with its raw power and fiery allure. Born from the depths of the Earth, this molten masterpiece flows with a mesmerizing glow, showcasing vibrant hues of crimson, orange, and gold as it courses down volcanic slopes. A symbol of creation and destruction, Lava embodies the duality of beauty and danger, sculpting landscapes and shaping ecosystems in its wake. Its intense heat and dynamic movement evoke a sense of awe and respect, reminding us of nature's formidable energy. Whether witnessed in the wild or artistically represented, Lava ignites the imagination, representing the primal forces that continue to shape our planet and inspire our stories. Embrace the mystique of Lava—a breathtaking element that embodies the very essence of Earth’s fiery heart."
    },
    {id: 9,
    name: "CocaCola",
    price: 150,
    image: Coca,
    details:"Introducing Coca-Cola, the iconic refreshment that has captured hearts and quenching thirsts for generations. With its effervescent sparkle and signature blend of flavors, each sip transports you to a world of nostalgia and joy. The perfect balance of sweetness and zest tantalizes your taste buds, while the unmistakable cola flavor delivers a refreshing experience like no other. Whether enjoyed on a hot summer day, paired with a delicious meal, or shared with friends at celebrations, Coca-Cola embodies moments of happiness and connection. Its timeless allure, served ice-cold, invites you to savor the simple pleasures of life, making every occasion a little brighter and more memorable. Embrace the legacy of Coca-Cola—an effervescent symbol of joy that continues to unite and inspire people around the globe."
    },
    {id: 10,
    name: "Pepsi",
    price: 300,
    image: Pepsi,
    details:"Introducing Pepsi, the vibrant refreshment that sparks excitement with every sip. Known for its bold flavor and unmistakable fizz, Pepsi delivers a thrilling burst of sweetness balanced by a zesty kick, making it a favorite for those who crave something refreshing and invigorating. Whether enjoyed ice-cold on a hot day, paired with your favorite snacks, or shared at lively gatherings, Pepsi embodies a spirit of fun and camaraderie. Its iconic blue branding and dynamic advertising have made it a symbol of youth and energy, appealing to the adventurous at heart. Celebrate the essence of Pepsi—a lively companion that brings moments of joy and exhilaration, making every occasion a reason to raise a glass and enjoy life to the fullest."
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