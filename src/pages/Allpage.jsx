import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"
import './Allpage.css'
import { Link } from 'react-router-dom'

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
      <h1>Alla produkter</h1>
      <div className="filters">
        <div className='filter'>
          <p>Hund produkter</p>
          <button><Link to='/all/dog'>+</Link></button>
        </div>
        <div className='filter'>
          <p>Katt produkter</p>
          <button><Link to='/all/cat'>+</Link></button>
        </div>
        <div className='filter'>
          <p>Andra produkter</p>
          <button><Link to='/all/other'>+</Link></button>
        </div>
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