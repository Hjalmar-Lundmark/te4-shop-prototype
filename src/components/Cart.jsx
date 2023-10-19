import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import { CartContext } from "../context/cartContextProvider";

function Cart() {
    const cart = useContext(CartContext);
    const { cartItems, totalPrice, totalItems, deleteItem, deleteAll, flipCart } = cart;
    const location = useLocation();

    return (
        <>
            <button onClick={() => { flipCart(location); }} className='navBtn'>
                <h3 className='navBtnH3'><PiShoppingCartSimpleDuotone /></h3>
                {totalItems ? (<><h5 className='navBtnH3 itemCount'>{totalItems}</h5></>) : (<></>)}
            </button>
            <div className="cart" id='cart'>
                <div className='cartBtns'>
                    <h2>Varukorg</h2>
                    <button onClick={() => { flipCart(location) }}>X</button>
                </div>
                <div className='items'>
                    {cartItems.map((item, index) =>
                        <CartItem
                            key={index}
                            id={item.id}
                            name={item.name}
                            deleteItem={deleteItem}
                            img={item.img}
                            price={item.price}
                            amount={item.amount}
                        />
                    )}
                </div>
                <div className='cartBtns'>
                    <button onClick={() => { deleteAll() }}>Töm korgen</button>
                    <div className='cartBtns'>
                        <p>{totalPrice} kr</p>
                        <Link to='/checkout'><button onClick={() => (document.getElementById('cart').style.display = 'none')}>Gå till kassan</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart