import './Productpage.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Productpage() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const { id } = useParams()
    const [product, setProduct] = useState([])

    async function fetchProduct() {
        await fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(result => {
                setProduct(result.data[0])
            }).catch(err => {
                console.log(err)
            });
    }

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
            newCartItems = [...cartItems, { id: id, name: product.name, img: product.image, price: product.price, amount: 1 }]
        }

        console.log(cartItems)
        console.log(newCartItems)
        if (cartItems === newCartItems) {
            message('Något gick fel, försök igen', 'warning')
        } else {
            message(product.name + ' lades till i varukorgen', 'success')
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

    useEffect(() => {
        fetchProduct()
    }, [id])

    return (
        <>
            <div className="product">
                <img className='productImg' src={`../../${product.image}`} alt="" />
                <div className="productDesc">
                    <h2>{product.name}</h2>
                    {product.brand ? (<h3>Gjord av {product.brand.name}</h3>) : (<></>)}
                    <p>{product.description}</p>
                    <p>
                        {product.oldPrice ? (<><s>{product.oldPrice} kr</s><br /></>) : (<br />)}
                        {product.price} kr
                    </p>
                    <p>I lager {product.inStock} st </p>
                    <button onClick={() => { document.getElementById('cart').style.display = 'none'; addItem() }}>Lägg i varukorg</button>
                </div>
            </div >
            <h2>Mer info här nere?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi eos ducimus vitae. Saepe assumenda modi illo aliquam molestiae voluptatum beatae ducimus, voluptate rem sit odio quis vero quaerat.</p>
        </>
    )
}

export default Productpage