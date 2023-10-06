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
        setDogProducts(getFirstFive(result.data.filter(item => item.categoryId === 2)))
        setCatProducts(getFirstFive(result.data.filter(item => item.categoryId === 1)))
        setOtherProducts(getFirstFive(result.data.filter(item => item.categoryId === 3)))
      }).catch(err => {
        console.log(err)
      });
  }

  function getFirstFive(products) {
    let firstFive = []
    for (let i = 0; i < 5; i++) {
      firstFive.push(products[i])
    }
    return firstFive
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      <Link to='/product'>
        <header className='hero'>
          <img src='canDog.jpg' alt='pic' />
          <h1>Ny vara! Köp nu!</h1>
        </header>
      </Link>
      <section className='category1'>
        <h2>Hundgrejer</h2>
        <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din hund. </p>
        <ul className='cards'>
          {dogProducts.length > 0 ? (
            <>
              {dogProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              ))}
            </>
          ) : (
            <p>Problem med att ladda in produkter</p>
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
          <h3 className='moreLink'><Link to='/all/dog'>...</Link></h3>
        </ul>
      </section >
      <section className='category2'>
        <h2>Kattgrejer</h2>
        <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din katt. </p>
        <ul className='cards'>
          {catProducts.length > 0 ? (
            <>
              {catProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              ))}
            </>
          ) : (
            <p>Problem med att ladda in produkter</p>
          )}
          <h3 className='moreLink'><Link to='/all/cat'>...</Link></h3>
        </ul>
      </section>
      <section className='category3'>
        <h2>Annat</h2>
        <p>Vi har också saker för dina ovanliga djur och diverse annat. </p>
        <ul className='cards'>
          {/* {otherProducts.length > 0 ? (
            <>
              {otherProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                />
              ))}
            </>
          ) : (
            <p>Problem med att ladda in produkter</p>
          )} */}
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
          <h3 className='moreLink'><Link to='/all/other'>...</Link></h3>
        </ul>
      </section>

    </>
  );
}

export default Homepage;