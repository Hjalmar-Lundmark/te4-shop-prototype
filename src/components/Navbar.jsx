import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="autoWidth">
                <div className='nav'>
                    <Link to='/'><h3>Djurkläder</h3></Link>
                    <div className='nav-items search'>
                        <div>
                            <input type="text" placeholder='Sök bland produkter' />
                            <button>Sök</button>
                        </div>
                        <button><PiShoppingCartSimpleDuotone /></button>
                    </div>
                </div>

                <div className='nav-items categories'>
                    <li className="nav-item">
                        <Link to='/'><p>Alla varor</p></Link>
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