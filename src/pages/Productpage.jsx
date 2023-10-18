import './Productpage.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from "../context/cartContextProvider";

function Productpage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const { addItem } = useContext(CartContext)

    async function fetchProduct() {
        await fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(result => {
                setProduct(result.data[0])
            }).catch(err => {
                console.log(err)
            });
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
                    <button onClick={() => { document.getElementById('cart').style.display = 'none'; addItem(id, product.name, product.image, product.price) }}>Lägg i varukorg</button>
                </div>
            </div >
            <h2>Mer info här nere?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi eos ducimus vitae. Saepe assumenda modi illo aliquam molestiae voluptatum beatae ducimus, voluptate rem sit odio quis vero quaerat.</p>
        </>
    )
}

export default Productpage