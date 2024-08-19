import React from "react"
import response from "./data"
import NavComponent from "./NavComponent"
import RenderComponent from "./RenderComponent"

class Age extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data :[],
        }
    }

    componentDidMount(){
        this.setState({data : response.list})
    }

    render(){
        const sortedData = this.state.data.sort((a, b) => a.age - b.age);
        return(
            <>
            <NavComponent keyword = {3}></NavComponent>
            <h2 className="header">Data is sorted in age wise</h2>
            <RenderComponent sortedData = {sortedData}></RenderComponent>
            </>
        )
    }
}

export default Age
