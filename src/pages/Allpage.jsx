import ProductCard from "../components/ProductCard"
import './Allpage.css'

function Allpage() {
    return (
        <>
            <h1>All Products</h1>
            <h2>Some kind of filter thing here</h2>
            <ul className='allWares'>
                <ProductCard
                    img='/dog1.jpg'
                    name='Produkt'
                    price='175'
                />
                <ProductCard
                    img='/dog2.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/dog3.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/dog4.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/dog5.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/cat1.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/cat2.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/cat3.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/cat4.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/cat1.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/bee.jpg'
                    name='Bee GoPro'
                    price='300'
                />
                <ProductCard
                    img='/croc.jpeg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/crab.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/hedgehog.jpg'
                    name='Produkt'
                    price='200'
                />
                <ProductCard
                    img='/llama1.jpg'
                    name='Produkt'
                    price='200'
                />
            </ul>
        </>
    )
}

export default Allpage