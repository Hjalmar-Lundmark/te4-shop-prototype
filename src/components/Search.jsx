import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function Search() {
    const searchInput = useRef(null)
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchInput.current.value)
        if (searchInput.current.value !== '') {
            navigate(`/all/search/${searchInput.current.value}`)
        }
    }

    return (
        <form className='searchArea' onSubmit={handleSearch} >
            <input type="search" placeholder='Sök bland produkter' className='searchField' ref={searchInput} />
            <button><h3 className='navBtn'>Sök</h3></button>
        </form>
    )
}

export default Search