import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

function Dogpage() {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        await fetch(`http://localhost:3000`)
            .then(res => res.json())
            .then(result => {
                result.data = result.data.filter(item => item.categories[0].categoryId === 1)
                setProducts(result.data);
            }).catch(err => {
                console.log(err)
            });
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Hund produkter</h1>
            <div className='filter'>
                <p>Hundprodukter</p>
                <button><Link to='/all'>X</Link></button>
            </div>
            <ul className='allWares'>
                {products.length > 0 ? (
                    <>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                img={'../' + item.image}
                                name={item.name}
                                brand={item.brand.name}
                                price={item.price}
                                oldPrice={item.oldPrice}
                            />
                        ))}
                    </>
                ) :
                    <p>Problem med att ladda in produkter</p>
                }
            </ul>
        </>
    )
}

export default Dogpage