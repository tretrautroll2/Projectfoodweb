import Cart2 from '../Pages/img/Cart2.png'
import Logo from '../Pages/img/Logo.webp'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useCart } from '../Context';
export default function Header() {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();
    return (
        <div className='Page-title'>
            <img src={Logo} className='logo' alt='Page Logo'></img>
            <h1 >Legendary Items Market </h1>

            <Link to="/Cart" className='Page-title-Cart'>
                <img src={Cart2} style={{ height: '70px', width: '70px' }}></img>
                {totalItems > 0 && <span className='total-items'>{totalItems}</span>}
            </Link>
        </div>
    )
}