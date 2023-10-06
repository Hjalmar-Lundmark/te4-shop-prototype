import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="autoWidth">
                <p>
                    Sida skapad av <Link to='https://github.com/Hjalmar-Lundmark'>Hjalmar Lundmark</Link> | <Link to='https://github.com/Hjalmar-Lundmark/te4-shop-prototype'>Github repo</Link>. <br />
                    Ångerrätt gäller i 14 dagar från leverans. <br />
                    <br />
                    Kontakt <br />
                    <Link to='mailto:realmail@jmail.com'>realmail@jmail.com</Link>. <br />
                    070-123 45 67
                </p>
            </div>
        </footer>
    )
}

export default Footer