import React from "react"
import response from "./data"
import NavComponent from "./NavComponent"
import RenderComponent from "./RenderComponent"

class Rank extends React.Component{
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
        const sortedData = this.state.data.sort((a, b) => a.rank - b.rank);
        return(
            <>
            <NavComponent keyword ={1}></NavComponent>
            <h2 className="header">Data is sorted in rank wise</h2>
            <RenderComponent sortedData = {sortedData}></RenderComponent>
            </>
        )
    }
}

export default Rank