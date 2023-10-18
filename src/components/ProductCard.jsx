import { Link } from "react-router-dom"

function ProductCard(props) {
    let { id, img, name, price, oldPrice, brand } = props

    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    const addItem = () => {
        cartItems = JSON.parse(localStorage.getItem('cartItems'));
        let newCartItems

        if (cartItems.find(item => item.id === id)) {
            console.log('Produkten finns redan i varukorgen')
            newCartItems = cartItems.map(item => {
                if (item.id === id) {
                    item.amount += 1
                }
                return item
            })
        } else {
            newCartItems = [...cartItems, { id: id, name: name, img: img, price: price, amount: 1 }]
        }

        console.log(cartItems)
        console.log(newCartItems)
        if (cartItems === newCartItems) {
            message('Något gick fel, försök igen', 'warning')
        } else {
            message(name + ' lades till i varukorgen', 'success')
        }

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    function message(text, type) {
        const msgbox = document.querySelector('#msgbox');

        const p = document.createElement('p');
        p.classList.add(type);
        p.textContent = text;
        msgbox.appendChild(p);
        setTimeout(() => {
            p.parentNode.removeChild(p);
        }, 2500);
    }

    return (
        <li className='card'>
            <Link to={`/product/${id}`}>
                <img src={img} alt={name} />
                <p>
                    {name} - {brand} <br />
                    {oldPrice ? (<><s>{oldPrice} kr</s><br /></>) : (<br />)}
                    {price} kr
                </p>
            </Link>
            <button onClick={() => { document.getElementById('cart').style.display = 'none'; addItem() }}>Lägg i varukorg</button>
        </li>
    )
}

export default ProductCard