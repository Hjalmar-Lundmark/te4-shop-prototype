import { useState, useParams } from 'react'

function Searchpage() {
    const { product, setProduct } = useState([])
    const { value } = useParams()

    function fetchSearch() {
        fetch(`http://localhost:3000/product/search/${value}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setProduct(result)
            }).catch(err => {
                console.log(err)
            });
    }

    return (
        <div>
            <h1>Searchpage</h1>
        </div>
    )
}

export default Searchpage