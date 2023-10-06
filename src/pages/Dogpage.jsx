import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

function Dogpage() {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        await fetch(`http://localhost:3000`)
            .then(res => res.json())
            .then(result => {
                console.log(result.data)
                result.data = result.data.filter(item => item.categoryId === 2)
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
                {products ? (
                    <>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                img={item.image}
                                name={item.name}
                                price={item.price}
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

export default Dogpage