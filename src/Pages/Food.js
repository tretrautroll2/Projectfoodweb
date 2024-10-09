import Pork1 from './img/Pork1.webp'
import Pork2 from './img/Pork2.webp'
import Pork3 from './img/Pork3.webp'
import Beef1 from './img/Beef1.webp'
import Beef2 from './img/Beef2.webp'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { useCart } from '../Context'
import { Allitems } from './Home'
export const AllFoodItems = [
  {id: 1,
    name: "Legendary Pork",
    type: "food",
  price: 200,
  image: Pork1,
  details: "Behold the Legendary Pork, a culinary marvel that transcends mere sustenance to become an experience of indulgence and grandeur. Sourced from the most revered heritage breeds, each cut of this exquisite meat tells a story of time-honored traditions and artisan craftsmanship.Roasted to perfection, the Legendary Pork boasts a golden, crackling crust that shatters with the slightest touch, giving way to the succulent juiciness that lies within. Each slice reveals a sumptuous texture, marinated with a secret blend that has been passed down through generations, promising a taste that is nothing short of legendary.Savor the legend. Indulge in the extraordinary. Let the Legendary Pork captivate your senses and elevate your dining experience to unprecedented heights."
  },
  {id: 2,
    name: "Mythic Pork",
    type: "food",
  price: 150,
  image: Pork2,
  details:"Introducing Mythic Pork, a culinary treasure that ignites the imagination and tantalizes the senses. Sourced from rare heritage breeds, each exquisite cut is a testament to unparalleled craftsmanship, delivering a sublime balance of tenderness and rich flavor. As you savor this extraordinary meat, a symphony of savory spices and herbs unfolds, evoking ancient traditions and epic feasts. The perfectly caramelized crust gives way to a juicy, melt-in-your-mouth interior, transporting you to a realm where every bite is a legendary adventure. Elevate your dining experience with Mythic Pork—a dish that transforms any gathering into a celebration of flavor and folklore, leaving a lasting impression that lingers long after the meal is over."
  },
  {id:3,
    name: "Common Pork",
    type: "food",
  price: 50,
  image: Pork3,
  details:"Introducing Rotten Flesh, a daring culinary creation that defies convention and challenges the palate. This audacious dish, a staple of adventurous cuisine, offers a unique flavor profile that is both intriguing and provocative. With a bold blend of spices that accentuates its distinct character, each bite delivers a surprising depth that teeters on the edge of culinary rebellion. Its texture, rugged and hearty, evokes the wildness of nature, while a hint of smokiness adds an unexpected warmth. Embrace the unconventional with Rotten Flesh—a dish that invites the brave to explore the uncharted territories of taste, transforming a seemingly grotesque concept into an unforgettable gastronomic experience that sparks conversation and ignites curiosity."
  },
  {id: 4,
    name: "Legendary Beef",
    type: "food",
  price: 300,
  image: Beef1,
  details:"Behold Legendary Beef, a sumptuous masterpiece that redefines the essence of fine dining. Sourced from the most prestigious cattle breeds, this exceptional cut embodies the pinnacle of flavor and tenderness. Each morsel is marbled to perfection, releasing a cascade of rich, savory juices that tantalize the senses with every bite. The deep, robust flavor is complemented by a symphony of herbs and spices, meticulously chosen to enhance its natural richness. Grilled to a flawless char, the exterior offers a satisfying crust that gives way to a succulent, melt-in-your-mouth center. Whether served as a standout centerpiece at a grand feast or savored during an intimate gathering, Legendary Beef transforms any occasion into a celebration of culinary excellence, leaving a lasting impression that lingers long after the last bite."
  },
  {id: 5,
    name: "Mythic Beef",
    type: "food",
  price: 250,
  image: Beef2,
  details:"Introducing Mythic Beef, an extraordinary culinary marvel that transports your taste buds to a realm of unparalleled indulgence. Sourced from ancient, revered cattle breeds, this exceptional meat boasts a rich tapestry of flavors that weave together the essence of heritage and artistry. Each cut reveals a mesmerizing marbling that promises an unforgettable melt-in-your-mouth experience, where tenderness meets bold, robust character. Infused with a secret blend of spices that evoke legendary feasts of old, Mythic Beef is expertly grilled or roasted to achieve a perfect balance of caramelized crust and juicy interior. Elevate your dining experience with this epic creation, transforming every meal into a grand celebration of flavor and tradition, and allowing you to savor a taste that is truly out of this world."
  }
 ]
export default function Food(){
  // const [selectedItem, setSelectedItem] = useState(null);
  // console.log("Selected item:", selectedItem);
const { addToCart, cartItems } = useCart();

if(!Allitems) return null

    return(
        <>
        <ul className='no-list container'>
           {Allitems.filter(item => item.type ==='food').map((item) =>(
          <li key={item.id} className='item'>
            <Link to={`/item/${item.id}`}
            className='item-center no-link'>
             <img className="img" src={item.image} alt="ShitImage"></img>
             <h2>{item.name}</h2>
             <p>Price: ${item.price}</p>
            </Link>
            <button onClick={() => addToCart(item.id)}>Add to cart {cartItems[item.id] > 0 && <>({cartItems[item.id]})</>}</button>    
         </li>
           ))}   
        </ul>
        </>
    )
}

