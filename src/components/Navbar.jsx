import { Link } from 'react-router-dom'
import './Navbar.css'
import Cart from './Cart';
import Search from './Search';

function Navbar() {


    return (
        <nav className='navbar'>
            <div className="autoWidth">
                <div className='nav'>
                    <Link to='/'><img src="../../FF.png" alt="logo" /></Link>
                    <div className='nav-items'>
                        <Search />
                        <Cart />
                    </div>
                </div>

                <div className='nav-items categories'>
                    <li className="nav-item">
                        <Link to='/all'><p>Alla varor</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/all/dog'><p>Hundgrejer</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/all/cat'><p>Kattgrejer</p></Link>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar