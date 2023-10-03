import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import './Navbar.css'
import Cart from './Cart';

function Navbar() {
    function flipCart() {
        if (document.getElementById('cart').style.display === 'block') {
            document.getElementById('cart').style.display = 'none'
        } else {
            document.getElementById('cart').style.display = 'block'
        }
    }

    return (
        <nav className='navbar'>
            <div className="autoWidth">
                <div className='nav'>
                    <Link to='/'><h2>Fluff&Fashion</h2></Link>
                    <div className='nav-items'>
                        <div className='searchArea'>
                            <input type="text" placeholder='Sök bland produkter' className='searchField' />
                            <button><h3 className='navBtn'>Sök</h3></button>
                        </div>
                        <button onClick={() => { flipCart() }}><h3 className='navBtn'><PiShoppingCartSimpleDuotone /></h3></button>
                        <Cart />
                    </div>
                </div>

                <div className='nav-items categories'>
                    <li className="nav-item">
                        <Link to='/all'><p>Alla varor</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/'><p>Hundgrejer</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/'><p>Kattgrejer</p></Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar