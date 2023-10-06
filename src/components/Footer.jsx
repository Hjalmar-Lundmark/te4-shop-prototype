import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="autoWidth">
                <p>
                    Sida skapad av <Link to='https://github.com/Hjalmar-Lundmark'>Hjalmar Lundmark</Link> | <Link to='https://github.com/Hjalmar-Lundmark/te4-shop-prototype'>Github repo</Link>. <br />
                    Ångerrätt gäller i 14 dagar från leverans. <br />
                    Alla priser är inklusive moms. <br />
                    Vi använder cookies för att förbättra din upplevelse på vår hemsida. <br />
                    <Link to='/kontakt'>Kontakta oss</Link> om du har några frågor. <br />
                    <Link to='mailto:realmail@mail.com'>realmail@mail.com</Link>. <br />
                    070-123 45 67
                </p>
            </div>
        </footer>
    )
}

export default Footer