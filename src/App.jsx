import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Productpage from './pages/Productpage'
import Allpage from './pages/Allpage'
import Dogpage from './pages/Dogpage'
import Catpage from './pages/Catpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Navbar />
          <div className='autoWidth flow'>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product" element={<Productpage />} />
              <Route path="/all" element={<Allpage />} />
              <Route path="/all/dog" element={<Dogpage />} />
              <Route path="/all/cat" element={<Catpage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
