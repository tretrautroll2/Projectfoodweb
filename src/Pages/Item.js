import { useParams } from 'react-router-dom';
import { Allitems } from "../Allitems";
import { useCart } from '../Context';


export default function Item() {
    const { addToCart, cartItems } = useCart();
    const { id } = useParams();
    const selectedItem = Allitems.find(item => item.id === parseInt(id))
    if (!selectedItem) {
        return <p>Item not found</p>;
    }

    return (
        <div className='item-details-container'>
            <h1>{selectedItem.name}</h1>
            <div className='item-details-container-div'>
                <div className='item-profile'>
                <img src={selectedItem.image} alt={selectedItem.name} className='item-details-container-div-img'/>
                <button onClick={() => addToCart(selectedItem.id)} style={{fontSize: '100%'}}>
                    Add to cart
                    {cartItems[selectedItem.id] > 0 && <>({cartItems[selectedItem.id]})</>}
                </button>
                </div>
                <p className='item-details-container-div-p'>{selectedItem.details}</p>
            </div>
        </div>
    );
};