import { useState } from "react"
import BlogPageWithAmii from "./BlogPageWithAmii"

function PaginationWithAmiiboa(props){
    const {data, perpage, pageshown} = props
    const pages = useState(Math.round(data.length/perpage))
    const [currentPage, setCurrentPage] = useState(1)

    const getPaginatedData = () =>{
        const startIndex = (currentPage*perpage)-perpage
        const endIndex=startIndex+perpage
        return data.slice(startIndex,endIndex)
    }

    const nextPage = () => {
        setCurrentPage(currentPage+1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage-1)
    }

    const changePage = (item) => {
        setCurrentPage(item)
    }

    const pageNumbers = () => {
        let start = Math.floor((currentPage-1)/pageshown)*pageshown
        return new Array(pageshown).fill().map((item,id) => start+id+1)
    }

    return(
        <>
            {
                getPaginatedData().map((item) => (
                    <BlogPageWithAmii data = {item}></BlogPageWithAmii>
                ))
            } 
            <br></br>
            <button className="button" onClick={(e) => prevPage(e)}>prev</button>
            {
                pageNumbers().map((item) => {
                    if(item<=50){
                    return <button className={`${currentPage === item ? 'unhidden' : 'hidden'}`}onClick={(e) => changePage(item)}>{item}</button>
                    }
                })
            }
            <button className="button" onClick={(e) => nextPage(e)}>next</button>          
        </>
    )
}
export default PaginationWithAmiiboa