import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'

function Checkoutpage() {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    }, [])

    useEffect(() => {
        let price = 0
        let items = 0
        for (let i = 0; i < cartItems.length; i++) {
            price += cartItems[i].price
            items += 1
        }
        setTotalPrice(price)
        setTotalItems(items)
    }, [cartItems])

    // maybe fetch cart items from backend instead of localStorage?

    return (
        <>
            <h1>Checkout Page</h1>
            <div className='itemsCheckout'>
                {cartItems.map((item, index) =>
                    <CartItem
                        key={index}
                        id={item.id}
                        name={item.name}
                        //deleteItem={deleteItem}
                        img={item.img}
                        price={item.price}
                    />
                )}
            </div>
            <div className='cartBtns'>
                <button>Töm korgen</button>
                <h3>Din varukorg</h3>
                <p>{totalPrice} kr</p>
                <p>{totalItems} st</p>
                <button><h3>Betala</h3></button>
            </div>
        </>
    )
}

export default Checkoutpage