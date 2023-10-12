import { useRef, useState } from "react"

function Search() {
    const searchInput = useRef(null)

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchInput.current.value)
    }

    return (
        <form className='searchArea' onSubmit={handleSearch} >
            <input type="text" placeholder='Sök bland produkter' className='searchField' ref={searchInput} />
            <button><h3 className='navBtn'>Sök</h3></button>
        </form>
    )
}

export default Search