import React from "react"
import axios from "axios"
// import style from "../WithHOC/hoc.css"

class Algolia extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [],
            searchItem :''
        }
    }

    handleInput = (e) => {
        this.setState({searchItem : e.target.value})
    }

    handleSearch = (e) => {
        e.preventDefault()
        axios.get(`https://hn.algolia.com/api/v1/search?query=${this.state.searchItem}`).then((res) => this.setState({data : res.data.hits})).catch((err) => console.log(err));
    }

    render(){
        return(
            <div >
                <h1>Enter you value</h1>
                <input type="text" onChange={(e) => this.handleInput(e)} placeholder="enter your search value"></input>
                <button onClick={(e) => this.handleSearch(e)}>Search</button>
                {
                    this.state.data.map((item) => (
                        <>
                            <h1>{item.title}</h1>
                            <p>{item.url}</p>
                        </>
                    ))
                }
            </div>
        )
    }
}

export default Algolia