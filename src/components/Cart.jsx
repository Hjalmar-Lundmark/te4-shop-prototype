import { useEffect, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';

function Cart() {
    const [cartItems, setCartItems] = useState(() => {
        console.log('please work')
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });
    //var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const deleteItem = (id) => {
        //cartItems = JSON.parse(localStorage.getItem('cartItems'));
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))

        console.log(id)
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems) // aaaaaaaaaaaaaaaa
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    const deleteAll = () => {
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    // AddItem moved to Productpage.jsx + ProductCard.jsx, since it's only used there

    // yeah idk
    useEffect(() => {
        console.log('useEffect')
        // localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // console.log(cartItems)
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
                            name={item.name || 'Product'} // where should I get these from?
                            deleteItem={deleteItem}
                            img={item.img || 'dog5.jpg'}
                            price={item.price || 100}
                        />
                    )}
                </div>
                <div className='cartBtns'>
                    <button onClick={() => { deleteAll() }}>Töm korgen</button>
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