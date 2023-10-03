import { Link } from "react-router-dom"

function ProductCard(props) {
    let { img, name, price } = props

    return (
        <li className='card'>
            <Link to='/product'>
                <img src={img} alt={name} />
                <p>{name} <br />{price} kr</p>
                <button>Lägg i varukorg</button>
            </Link>
        </li>
    )
}

export default ProductCard