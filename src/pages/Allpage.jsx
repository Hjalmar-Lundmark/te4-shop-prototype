import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"
import './Allpage.css'

function Allpage() {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    await fetch(`http://localhost:3000`)
      .then(res => res.json())
      .then(result => {
        console.log(result.data)
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
      <h1>All Products</h1>
      <h2>Some kind of filter thing here</h2>
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


        {/* <ProductCard
                    img='/llama1.jpg'
                    name='Produkt'
                    price='200'
                /> */}
      </ul>
    </>
  )
}

export default Allpage