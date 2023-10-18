import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContextProvider";

function ProductCard(props) {
    let { id, img, name, price, oldPrice, brand } = props
    const { addItem } = useContext(CartContext)

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
            <button onClick={() => { document.getElementById('cart').style.display = 'none'; addItem(id, name, img, price) }}>Lägg i varukorg</button>
        </li>
    )
}

export default ProductCard