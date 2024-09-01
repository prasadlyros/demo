import { useEffect, useState } from "react"
import axios from "axios"
import PaginationWithAmiiboa from "./PaginationWithAmiiboa"

function PageRootWithAmii(){
    const [results, setResults] = useState([])

    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/').then((res) => setResults(res.data.amiibo)).catch((err) => console.log(err))
    },[])
    return(
        <>
            {console.log(results)}
            <PaginationWithAmiiboa data = {results} perpage = {8} pageshown = {10}></PaginationWithAmiiboa>
        </>
    )
}

export default PageRootWithAmii