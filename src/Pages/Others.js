import DiamondSword from './img/DiamondSword.webp'
import Dirt from './img/Dirt.webp'
import Saddle from './img/Saddle.webp'
import Stick from './img/Stick.webp'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useCart } from "../Context";
import { Allitems } from '../components/cart-item';

export const AllOtherItems = [
    {
        id: 11,
        name: "Diamond Sword",
        type: "others",
        price: 3000,
        image: DiamondSword,
        details: "Introducing the Diamond Sword, a legendary weapon forged from the rarest of materials, embodying strength, elegance, and unparalleled power. Crafted by master artisans, its shimmering blade gleams with an otherworldly brilliance, reflecting light in a dance of vibrant hues. This iconic weapon is not just a tool of battle; it is a symbol of heroism and valor, revered by adventurers and warriors alike. With each swing, the Diamond Sword slices through the air with unmatched precision, cutting through the toughest foes and obstacles with effortless grace. Its perfectly balanced hilt offers a secure grip, empowering its wielder with confidence and prowess. Whether brandishing it in epic quests or showcasing it as a prized possession, the Diamond Sword stands as a testament to skill, bravery, and the timeless pursuit of excellence in the realm of fantasy. Embrace the legend and wield the Diamond Sword—a true artifact of power and glory!"
    },
    {
        id: 12,
        name: "Dirt",
        type: "others",
        price: 4000,
        image: Dirt,
        details: "Introducing Dirt, the humble yet essential foundation of life that nurtures our planet and fuels growth. Often overlooked, this unassuming substance is a rich tapestry of minerals, organic matter, and microorganisms, working in harmony to support the flourishing of ecosystems. Dirt is where seeds take root, where plants find nourishment, and where vibrant landscapes emerge. It holds the stories of ages past, preserving the footprints of nature’s myriad inhabitants. Whether it’s the earthy aroma after a fresh rain or the satisfying crunch beneath your feet, Dirt connects us to the very essence of the Earth. Celebrate the beauty of Dirt—a symbol of resilience and vitality, reminding us that from the simplest elements arise the most profound wonders of the natural world."
    },
    {
        id: 13,
        name: "Saddle",
        type: "others",
        price: 100000,
        image: Saddle,
        details: "Introducing the Saddle, a timeless emblem of adventure and exploration that transforms the bond between horse and rider. Meticulously crafted from durable materials, this essential piece of equestrian gear provides both comfort and support, allowing for a harmonious ride across diverse terrains. With its sleek design and thoughtful features, the Saddle ensures optimal balance and control, empowering riders to connect deeply with their majestic companions. Whether galloping through sun-drenched fields, navigating rugged trails, or competing in exhilarating events, the Saddle embodies the spirit of freedom and the thrill of the journey. Embrace the legacy of the Saddle—a gateway to unforgettable experiences, forged in the heart of the great outdoors, where every ride tells a story of courage and companionship."
    },
    {
        id: 14,
        name: "Legendary Stick",
        type: "others",
        price: 3000000,
        image: Stick,
        details: "Introducing the Legendary Stick, a seemingly simple yet extraordinary artifact imbued with the spirit of adventure and the power of nature. Crafted from ancient wood and polished by time, this stick is more than just a tool; it is a symbol of resilience and resourcefulness. Wielded by explorers and heroes alike, the Legendary Stick serves as a trusty companion in the wild, guiding its bearer through uncharted territories and daunting challenges. Its unassuming design belies the strength and versatility it offers—whether used for support on rugged trails, as a makeshift weapon in dire situations, or as a staff of wisdom to guide lost souls home. Each notch and groove tells a tale of epic quests and legendary journeys. Embrace the essence of the Legendary Stick—a humble yet powerful companion that invites you to embark on your own adventures and forge your own path in the great unknown."
    }
]
export default function Others() {
    // const [selectedItem, setSelectedItem] = useState(null);
    const { addToCart, cartItems } = useCart();
    if (!Allitems) return null
    return (
        <>
            <ul className="no-list container">
                {Allitems.filter(item => item.type === "others").map((item) => (<li key={item.id} className='item'>
                    <Link to={`/Item/${item.id}`}
                        className='item-center no-link'>
                        <img className='img' src={item.image} alt="ShitImage"></img>
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                    </Link>
                    <button onClick={() => addToCart(item.id)}>Add to cart
                        {/* {cartItems[item.id] > 0 && <>({cartItems[item.id]})</>} */}
                    </button>
                </li>

                ))}
            </ul>
        </>
    )
}