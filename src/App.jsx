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
          {/*}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/forecast" element={<Forecastpage />} />
          </Routes>
          */}
          <h1>Köp</h1>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
