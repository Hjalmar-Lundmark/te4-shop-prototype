import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Searchpage() {
    const [searchProducts, setSearchProducts] = useState([])
    const { value } = useParams()

    async function fetchSearch() {
        console.log(value)
        await fetch(`http://localhost:3000/product/search/${value}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setSearchProducts(result.data)
            }).catch(err => {
                console.log(err)
            });
    }

    useEffect(() => {
        fetchSearch()
    }, [value])

    return (
        <>
            <h1>Sökresultat</h1>
            <ul className='allWares'>
                {searchProducts ? (
                    <>
                        {searchProducts.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                img={'../../' + item.image}
                                name={item.name}
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

export default Searchpage