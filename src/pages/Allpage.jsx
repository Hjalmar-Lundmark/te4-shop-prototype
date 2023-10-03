import { Link } from "react-router-dom"
import './Allpage.css'

function Allpage() {
    return (
        <>
            <h1>All Products</h1>
            <h2>Some kind of filter thing here</h2>
            <ul className='cards AllWares'>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../dog1.jpg' alt='pic' />
                        <p>Produkt <br />175 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../dog1.jpg' alt='pic' />
                        <p>Produkt <br />175 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../dog2.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../dog3.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../dog4.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../dog5.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../cat1.jpg' alt='pic' />
                        <p>Produkt <br />175 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../cat2.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../cat3.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../cat4.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
                <li className='card'>
                    <Link to='/product'>
                        <img src='../cat1.jpg' alt='pic' />
                        <p>Produkt <br />200 kr</p>
                        <button>Lägg i varukorg</button>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Allpage