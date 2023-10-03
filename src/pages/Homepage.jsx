import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <Link to='/product'>
        <header className='hero'>
          <img src='https://picsum.photos/1280/720' alt='pic' />
          <h1>Köp nu</h1>
        </header>
      </Link>
      <section className='category1'>
        <h2>Hundgrejer</h2>
        <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din hund. </p>
        <ul className='cards'>
          <li className='card'>
            <Link to='/product'>
              <img src='../dog1.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />175 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../dog2.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../dog3.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../dog4.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../dog5.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <h3 className='moreLink'><Link to='/all'>Och mer</Link></h3>
        </ul>
      </section >
      <section className='category2'>
        <h2>Kattgrejer</h2>
        <p>Vi har alla möjliga halsband, kläder och allt du kan tänka dig för just din katt. </p>
        <ul className='cards'>
          <li className='card'>
            <Link to='/product'>
              <img src='../cat1.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />175 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../cat2.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../cat3.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../cat4.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <li className='card'>
            <Link to='/product'>
              <img src='../cat1.jpg' alt='pic' width={175} height={175} />
              <p>Produkt <br />200 kr</p>
              <button>Lägg i varukorg</button>
            </Link>
          </li>
          <h3 className='moreLink'><Link to='/all'>Och mer</Link></h3>
        </ul>
      </section>

    </>
  );
}

export default Homepage;