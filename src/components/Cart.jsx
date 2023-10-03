import './Cart.css'

function Cart() {
    return (
        <>
            <div className="cart">
                <h2>Varukorg</h2>
                <div className='items'>
                    <div className="item">
                        <img src="../../dog2.jpg" alt="" />
                        <h3>Produkt</h3>
                        <p>2000 kr</p>
                        <button>Remove</button>
                    </div>
                    <div className="item">
                        <img src="" alt="" />
                        <h3>Produkt 2</h3>
                        <p>2000 kr</p>
                        <button>Remove</button>
                    </div>
                </div>

                <button>Gå till kassan</button>
                <button>Töm korgen</button>
            </div>
        </>
    )
}

export default Cart