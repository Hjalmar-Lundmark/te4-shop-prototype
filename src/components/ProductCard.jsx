import { Link } from "react-router-dom"
import { useState } from 'react'

function ProductCard(props) {
    let { img, name, price } = props

    const [cartItems, setCartItems] = useState(() => {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    });

    const addItem = () => {
        const newItem = document.getElementById('newItem').value; // TODO: change this
        if (newItem === '') { return }
        const newcartItems = [...cartItems, { id: cartItems[cartItems.length - 1].id + 1, name: newItem }] //uses locally stored number to get index
        setCartItems(newcartItems)
    }

    return (
        <li className='card'>
            <Link to='/product'>
                <img src={img} alt={name} />
                <p>{name} <br />{price} kr</p>
                <button onClick={() => { addItem }}>Lägg i varukorg</button>
            </Link>
        </li>
    )
}

export default ProductCard