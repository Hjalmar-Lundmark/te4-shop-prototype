import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react'

function Homepage() {
  const [dogProducts, setDogProducts] = useState([])
  const [catProducts, setCatProducts] = useState([])
  const [otherProducts, setOtherProducts] = useState([])

  async function fetchProducts() {
    await fetch(`http://localhost:3000`)
      .then(res => res.json())
      .then(result => {
        setDogProducts(result.data.filter(item => item.categoryId === 2))
        setCatProducts(result.data.filter(item => item.categoryId === 1))
        setOtherProducts(result.data.filter(item => item.categoryId === 3))

      }).catch(err => {
        console.log(err)
      });
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Link to='/product'>
        <header className='hero'>
          <img src='canDog.jpg' alt='pic' />
          <h1>Köp nu</h1>
        </header>
      </Link>
      <section className='category1'>
        <h2>Hundgrejer</h2>
        <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din hund. </p>
        <ul className='cards'>
          {dogProducts ? (
            <>
              {dogProducts.filter((i = 0) => (
                i.id < 8
              )).map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              )
              )}
            </>
          ) : (
            <p>There was an error loading products</p>
          )}
          {/* <ProductCard
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
          /> */}
          <h3 className='moreLink'><Link to='/all/dog'>Och mer</Link></h3>
        </ul>
      </section >
      <section className='category2'>
        <h2>Kattgrejer</h2>
        <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din katt. </p>
        <ul className='cards'>
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
          <h3 className='moreLink'><Link to='/all/cat'>Och mer</Link></h3>
        </ul>
      </section>
      <section className='category3'>
        <h2>Annat</h2>
        <p>Vi har också saker för dina ovanliga djur och diverse annat. </p>
        <ul className='cards'>
          <ProductCard
            img='/bee1.jpg'
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
          <h3 className='moreLink'><Link to='/all/other'>Och mer</Link></h3>
        </ul>
      </section>

    </>
  );
}

export default Homepage;