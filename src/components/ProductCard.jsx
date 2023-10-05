import { Link } from "react-router-dom"
import { useEffect } from 'react'

function ProductCard(props) {
    let { img, name, price } = props

    // const [cartItems, setCartItems] = useState(() => {
    //     console.log('please work')
    //     return JSON.parse(localStorage.getItem('cartItems')) || [];
    // });
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const addItem = () => {
        // TODO: get name from somewhere
        cartItems = JSON.parse(localStorage.getItem('cartItems'));

        let newCartItems
        if (cartItems.length > 0) {
            newCartItems = [...cartItems, { id: cartItems[cartItems.length - 1].id + 1, name: 'placeholder' }]
        } else {
            newCartItems = [...cartItems, { id: 0, name: 'placeholder' }]
        }

        console.log(cartItems)
        console.log(newCartItems)
        if (cartItems === newCartItems) {
            alert('Något gick fel, försök igen')
        } else {
            alert('Produkten lades till i varukorgen')
        }

        //setCartItems(newCartItems)

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    // useEffect(() => {
    //     console.log('useEffect')
    //     // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    //     // console.log(cartItems)
    // }, [cartItems])

    return (
        <li className='card'>
            <Link to='/product'>
                <img src={img} alt={name} />
                <p>{name} <br />{price} kr</p>
            </Link>
            <button onClick={() => { addItem() }}>Lägg i varukorg</button>
        </li>
    )
}

export default ProductCard