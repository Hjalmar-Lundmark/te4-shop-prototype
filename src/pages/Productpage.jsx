import { useState } from 'react';
import './Productpage.css'

function Productpage() {
    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    const addItem = () => {
        //const name = document.getElementById('name').value || 'placeholder'; // TODO: change this
        //if (name === '') { return }
        const newcartItems = [...cartItems, { id: cartItems[cartItems.length].id + 1 || 0, name: 'placeholder' }] //uses locally stored number to get index
        setCartItems(newcartItems)


        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems)
    }

    return (
        <>
            <h1>Produkt sida</h1>
            <div className="product">
                <img className='productImg' src="../../dog1.jpg" alt="" />
                <div className="productDesc">
                    <h2>Produkt</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, tempore. Accusamus quo facilis molestias temporibus tempora culpa voluptates sed fugiat ducimus saepe rerum, expedita excepturi nihil optio qui praesentium sint.</p>
                    <p>Pris</p>
                    <p>storlek?</p>
                    <button onClick={() => { addItem() }}>Lägg i varukorg</button>
                </div>
            </div>
            <h2>More info down here maybe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi eos ducimus vitae. Saepe assumenda modi illo aliquam molestiae voluptatum beatae ducimus, voluptate rem sit odio quis vero quaerat.</p>
        </>
    )
}

export default Productpage