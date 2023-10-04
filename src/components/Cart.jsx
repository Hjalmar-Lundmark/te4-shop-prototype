import { useState, useEffect } from 'react'
import './Cart.css'
import CartItem from './CartItem'

function Cart() {
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    const deleteItem = (id) => {
        const newcartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newcartItems)
    }

    const deleteAll = () => {
        setCartItems([]);
    }

    // AddItem moved to Productpage.jsx + ProductCard.jsx, since it's only used there

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <>
            <div className="cart" id='cart'>
                <h2>Varukorg</h2>
                <div className='items'>
                    {cartItems.map((todo, index) =>
                        <CartItem
                            key={index}
                            id={todo.id}
                            name={todo.name || 'Product'} // where should I get these from?
                            deleteTodo={deleteItem}
                            img={todo.img || 'dog5.jpg'}
                            price={todo.price || 100}
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