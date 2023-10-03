import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="autoWidth">
                <div className='nav'>
                    <Link to='/'><h2>Djurkläder</h2></Link>
                    <div className='nav-items'>
                        <div className='searchArea'>
                            <input type="text" placeholder='Sök bland produkter' className='searchField' />
                            <button><h3 className='navBtn'>Sök</h3></button>
                        </div>
                        <button><h3 className='navBtn'><PiShoppingCartSimpleDuotone /></h3></button>
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