import { Link } from 'react-router-dom'

function CartItem(props) {
    let { id, img, name, price, amount } = props

    return (
        <div className="item">
            <img src={'../../' + img} alt="" />
            <h3><Link to={`/product/${id}`}>{name}</Link></h3>
            <p>{price} kr</p>
            <p>{amount} st</p>
            <button onClick={() => { props.deleteItem(id); }}>Ta bort</button>
        </div>
    )
}

export default CartItem