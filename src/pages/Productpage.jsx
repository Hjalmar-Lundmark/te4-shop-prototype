import './Productpage.css'

function Productpage() {
    // const [cartItems, setCartItems] = useState(() => {
    //     console.log('please work')
    //     return JSON.parse(localStorage.getItem('cartItems')) || [];
    // });

    //const [cartItems, setCartItems] = useState([])

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
        <>
            <h1>Produkt sida</h1>
            <div className="product">
                <img className='productImg' src="../../dog1.jpg" alt="" />
                <div className="productDesc">
                    <h2>Produkt</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, tempore. Accusamus quo facilis molestias temporibus tempora culpa voluptates sed fugiat ducimus saepe rerum, expedita excepturi nihil optio qui praesentium sint.</p>
                    <p>Pris</p>
                    <p>storlek?</p>
                    <button onClick={() => { addItem() }}>Lägg i varukorg</button>
                </div>
            </div>
            <h2>More info down here maybe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi eos ducimus vitae. Saepe assumenda modi illo aliquam molestiae voluptatum beatae ducimus, voluptate rem sit odio quis vero quaerat.</p>
        </>
    )
}

export default Productpage