import './Cart.css'

function Cart() {
    return (
        <>
            <div className="cart" id='cart'>
                <h2>Varukorg</h2>
                <div className='items'>
                    <div className="item">
                        <img src="../../dog2.jpg" alt="" />
                        <h3>Produkt</h3>
                        <p>2000 kr</p>
                        <button>Remove</button>
                    </div>
                    <div className="item">
                        <img src="../../dog4.jpg" alt="" />
                        <h3>Produkt 2</h3>
                        <p>2000 kr</p>
                        <button>Remove</button>
                    </div>
                </div>
                <div className='cartBtns'>
                    <button>Töm korgen</button>
                    <div className='cartBtns'>
                        <p>4000 kr</p>
                        <button>Gå till kassan</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart