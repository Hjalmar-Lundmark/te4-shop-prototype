import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import { CartContext } from "../context/cartContextProvider";

function Cart() {
    const cart = useContext(CartContext);
    const { cartItems, totalPrice, deleteItem, deleteAll, flipCart } = cart;
    const location = useLocation();

    // const [cartItems, setCartItems] = useState(() => {
    //     return JSON.parse(localStorage.getItem('cartItems')) || [];
    // });

    // const [totalPrice, setTotalPrice] = useState(0)

    // const deleteItem = (id) => {
    //     setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    //     var newCartItems

    //     if (cartItems.find(item => item.id === id && item.amount > 1)) {
    //         newCartItems = cartItems.map(item => {
    //             if (item.id === id && item.amount > 1) {
    //                 item.amount -= 1
    //             }
    //             return item
    //         })
    //     } else {
    //         newCartItems = cartItems.filter(item => item.id !== id)
    //     }

    //     setCartItems(newCartItems)
    //     localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    // }

    // const deleteAll = () => {
    //     setCartItems([]);
    //     localStorage.setItem('cartItems', JSON.stringify([]));
    // }

    // function flipCart() {
    //     if (location.pathname === '/checkout') {
    //         return document.getElementById('cart').style.display = 'none'
    //     }

    //     if (document.getElementById('cart').style.display === 'block') {
    //         document.getElementById('cart').style.display = 'none'
    //     } else {
    //         document.getElementById('cart').style.display = 'block'
    //     }
    // }

    return (
        <>
            <button onClick={() => { flipCart(location); }}><h3 className='navBtn'><PiShoppingCartSimpleDuotone /></h3></button>
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