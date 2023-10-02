import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Navbar />
          <div className='autoWidth flow'>
            {/*}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/forecast" element={<Forecastpage />} />
          </Routes>
          */}
            <a href="">
              <header className='hero'>
                <img src='https://picsum.photos/1280/720' alt='pic' />
                <h1>Köp nu</h1>
              </header>
            </a>
            <section className='category1'>
              <h2>Hundgrejer</h2>
              <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din hund. </p>
              <ul className='cards'>
                <li className='card'>
                  <a href="">
                    <img src='../public/dog1.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />175 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/dog2.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/dog3.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/dog4.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/dog5.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <h3 className='moreLink'><a href="">Och mer</a></h3>
              </ul>
            </section>
            <section className='category2'>
              <h2>Kattgrejer</h2>
              <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din katt. </p>
              <ul className='cards'>
                <li className='card'>
                  <a href="">
                    <img src='../public/cat1.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />175 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/cat2.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/cat3.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/cat4.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <li className='card'>
                  <a href="">
                    <img src='../public/cat1.jpg' alt='pic' width={175} height={175} />
                    <p>Produkt <br />200 kr</p>
                    <button>Lägg i varukorg</button>
                  </a>
                </li>
                <h3 className='moreLink'><a href="">Och mer</a></h3>
              </ul>
            </section>

          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
