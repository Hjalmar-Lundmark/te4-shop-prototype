import { useState, useEffect } from 'react'
import './Cart.css'
import CartItem from './CartItem'

function Cart() {
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    const deleteItem = (id) => {
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    const deleteAll = () => {
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    // AddItem moved to Productpage.jsx + ProductCard.jsx, since it's only used there

    // yeah idk
    /*useEffect(() => {
        console.log('useEffect')
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems)
    }, [cartItems])
    */

    return (
        <>
            <div className="cart" id='cart'>
                <h2>Varukorg</h2>
                <div className='items'>
                    {cartItems.map((item, index) =>
                        <CartItem
                            key={index}
                            id={item.id}
                            name={item.name || 'Product'} // where should I get these from?
                            deleteItem={deleteItem}
                            img={item.img || 'dog5.jpg'}
                            price={item.price || 100}
                        />
                    )}
                </div>
                <div className='cartBtns'>
                    <button onClick={() => { deleteAll }}>Töm korgen</button>
                    <div className='cartBtns'>
                        <p>4000 kr</p>
                        <button>Gå till kassan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart