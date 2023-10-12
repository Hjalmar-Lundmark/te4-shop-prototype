import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'

function Checkoutpage() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    }, [])

    // maybe fetch cart items from backend instead of localStorage?

    return (
        <>
            <h1>Checkout Page</h1>
            <div className='itemsCheckout'>
                {cartItems.map((item, index) =>
                    <CartItem
                        key={index}
                        id={item.id}
                        name={item.name || 'Product'} // where should I get these from?
                        //deleteItem={deleteItem}
                        img={item.img || 'dog5.jpg'}
                        price={item.price || 100}
                    />
                )}
            </div>
            <div className='cartBtns'>
                <button>Töm korgen</button>
                <h3>Din varukorg</h3>
                <p>4000 kr</p>
                <p>2 st</p>
                <button><h3>Betala</h3></button>
            </div>
        </>
    )
}

export default Checkoutpage