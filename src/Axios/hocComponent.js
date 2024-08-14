import axios from "axios"
import React from "react"
// import style from "../WithHOC/hoc.css"

const hocComponent = (InputComponent) => {
    return class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                data : [],
                searchItem : ''
            }
        }

        handleInput = (e) => {
            this.setState({searchItem : e.target.value })
        }

        handleSearch = (e) => {
            e.preventDefault()
            axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=7nan6gzLwGGgcFVrSMpCc2LYf-QIjvyg9eepud2XhqU`).then((res) => this.setState({data : res.data.results})).catch((err) => console.log(err))
        }

        render(){
            return(
                <>
                    <h1>Search photos by Axios</h1>
                    <InputComponent props1 = {this.state.data} handleInput = {this.handleInput} handleSearch = {this.handleSearch}></InputComponent>
                </>
            )
        }
    }
}

export default hocComponent