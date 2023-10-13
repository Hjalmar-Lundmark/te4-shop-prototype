import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import CartItem from './CartItem'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';

function Cart() {
    const [cartItems, setCartItems] = useState(() => {
        console.log('please work')
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    const [totalPrice, setTotalPrice] = useState(0)

    const deleteItem = (id) => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))

        console.log(id)
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    const deleteAll = () => {
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    useEffect(() => {
        console.log('useEffect')
        let price = 0
        for (let i = 0; i < cartItems.length; i++) {
            price += (cartItems[i].price * cartItems[i].amount)
        }
        setTotalPrice(price)
    }, [cartItems])

    function flipCart() {
        if (document.getElementById('cart').style.display === 'block') {
            document.getElementById('cart').style.display = 'none'
        } else {
            document.getElementById('cart').style.display = 'block'
        }
    }

    return (
        <>
            <button onClick={() => { flipCart(); setCartItems(JSON.parse(localStorage.getItem('cartItems'))) }}><h3 className='navBtn'><PiShoppingCartSimpleDuotone /></h3></button>
            <div className="cart" id='cart'>
                <h2>Varukorg</h2>
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