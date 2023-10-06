import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

function Catpage() {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        await fetch(`http://localhost:3000`)
            .then(res => res.json())
            .then(result => {
                result.data = result.data.filter(item => item.categoryId === 1)
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
            <h1>Katt produkter</h1>
            <div className='filter'>
                <p>Kattprodukter</p>
                <button><Link to='/all'>X</Link></button>
            </div>
            <ul className='allWares'>
                {products ? (
                    <>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                img={'../' + item.image}
                                name={item.name}
                                price={item.price}
                                oldPrice={item.oldPrice}
                            />
                        ))}
                    </>
                ) :
                    <p>There was an error loading products</p>
                }
            </ul>
        </>
    )
}

export default Catpage