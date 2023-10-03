import './Productpage.css'

function Productpage() {
    return (
        <>
            <h1>Product Page</h1>
            <div className="product">
                <img className='productImg' src="../../dog1.jpg" alt="" />
                <div className="productDesc">
                    <h2>Product name</h2>
                    <p>Product description</p>
                    <p>Price</p>
                    <button>Add to cart</button>
                </div>
            </div>
            <h2>More info down here maybe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi eos ducimus vitae. Saepe assumenda modi illo aliquam molestiae voluptatum beatae ducimus, voluptate rem sit odio quis vero quaerat.</p>
        </>
    )
}

export default Productpage