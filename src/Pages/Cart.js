
import { Allitems } from "../App";
import { useCart } from "../Context";

export const Cart = () => {
    const { cartItems, removeFromCart, addToCart, updateCartItems, getTotal, clearCart } = useCart();
    const totalAmount = getTotal();

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <hr className="dotted-line"></hr>
            {Allitems.map((item) => {
                if (cartItems[item.id] !== 0) {
                    return (

                        <div className="cart-item">
                            <img src={item.image} alt="Troll" className="cart-item-img"></img>

                            <div className="cart-item-description">
                                <h2>{item.name}</h2>
                                <p>${item.price}</p>
                                <div className="cart-item-button">
                                    <button onClick={() => addToCart(item.id)}>+</button>
                                    <input value={cartItems[item.id]} onChange={(e) => updateCartItems(Number(e.target.value), item.id)}></input>
                                    <button onClick={() => removeFromCart(item.id)}>-</button>
                                </div>
                            </div>
                        </div>


                    )
                }
            })}
            <hr className="dotted-line"></hr>

            {totalAmount > 0 ? (
                <div className="checkOut">
                    <button onClick={clearCart}>Empty your cart</button>
                    <p>Your total: ${totalAmount}</p>
                </div>
            ) : (<h2>Your cart is empty</h2>)}
        </div>
    )
}

