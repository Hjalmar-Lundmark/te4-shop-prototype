import './Productpage.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Productpage() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const { id } = useParams()
    const [product, setProduct] = useState([])

    function fetchProduct() {
        fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setProduct(result.data[0])
            }).catch(err => {
                console.log(err)
            });
    }

    const addItem = () => {
        cartItems = JSON.parse(localStorage.getItem('cartItems'));

        let newCartItems

        if (cartItems.find(item => item.id === id)) {
            console.log('Produkten finns redan i varukorgen')   //TODO
            //return
        }

        newCartItems = [...cartItems, { id: id, name: product.name, img: product.image, price: product.price }]

        console.log(cartItems)
        console.log(newCartItems)
        if (cartItems === newCartItems) {
            alert('Något gick fel, försök igen')
        } else {
            alert('Produkten lades till i varukorgen')
        }

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    useEffect(() => {
        fetchProduct()
    }, [id])

    return (
        <>
            <h1>Produkt sida {id}</h1>
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