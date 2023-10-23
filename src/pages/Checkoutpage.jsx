import { useContext } from 'react'
import CartItem from '../components/CartItem'
import { CartContext } from "../context/cartContextProvider";
import './Checkoutpage.css'

function Checkoutpage() {
    const cart = useContext(CartContext);
    const { cartItems, totalPrice, totalItems, deleteItem, deleteAll } = cart;

    // testing, the idea is to get product info from the database instead of using the cartItems array
    async function fetchOneProduct(id) {
        let newCart = []
        await fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result.data[0])
                newCart.push(result.data[0])
            }).catch(err => {
                console.log(err)
            });
        return newCart[0]
    }

    async function test() {
        let newCart = []
        for (let i = 0; i < cartItems.length; i++) {
            newCart.push(await fetchOneProduct(cartItems[i].id))
        }
        console.log(newCart)
        // then add to cart with amount and the stuff
    }

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
                <button onClick={() => { test() }}><h3>Betala</h3></button>
            </div>
            {/* <div className='checkoutForm'>
                <form action="POST">
                    <input type="text" name='firstName' id='firstName' placeholder='Förnamn' />
                    <input type="text" name='lastName' id='lastName' placeholder='Efternamn' /><br />
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="text" name='adress' id='adress' placeholder='Adress' /><br />

                </form>
            </div> */}
        </>
    )
}

export default Checkoutpage