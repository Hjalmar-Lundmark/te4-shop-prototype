import { useContext } from 'react'
import CartItem from '../components/CartItem'
import { CartContext } from "../context/cartContextProvider";

function Checkoutpage() {
    const cart = useContext(CartContext);
    const { cartItems, totalPrice, totalItems, deleteItem, deleteAll } = cart;

    return (
        <>
            <h1>Checkout Page</h1>
            <div className='itemsCheckout'>
                {cartItems.map((item, index) =>
                    <CartItem
                        key={index}
                        id={item.id}
                        name={item.name}
                        deleteItem={deleteItem}
                        img={item.img}
                        price={item.price}
                        amount={item.amount}
                    />
                )}
            </div>
            <div className='cartBtns'>
                <button onClick={() => { deleteAll() }}>Töm korgen</button>
                <h3>Din varukorg</h3>
                <p>{totalPrice} kr</p>
                <p>{totalItems} st</p>
                <button><h3>Betala</h3></button>
            </div>
        </>
    )
}

export default Checkoutpage