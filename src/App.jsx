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
          <div className='autoWidth'>
            {/*}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/forecast" element={<Forecastpage />} />
          </Routes>
          */}
            <header className='hero'>
              <img src='https://picsum.photos/1280/720' alt='pic' />
              <div className='filter'></div>
              <h1>Köp nu</h1>
            </header>

          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
