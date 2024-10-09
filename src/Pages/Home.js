// import Food from "./Food";
// import Drinks from "./Drinks";
// import Others from "./Others";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { useCart } from "../Context";
import CartItem from "../components/cart-item";
export default function Home(){
    return (
        <div>
            <CartItem />
        </div>
    )
}