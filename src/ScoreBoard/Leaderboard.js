import React from "react";
import response from './data'
import "./scoreboard.css"
import RenderComponent from "./RenderComponent";

class LeaderBoard extends React.Component{
    constructor(props)
{
    super(props)
    this.state={
        data:[]
    }
}
componentDidMount(){
    this.setState({data:response.list})
}
render(){
    return(
        <>
            {/* {console.log(this.state.data)} */}
            <h2 className="header">Data in no specific order</h2>
            <RenderComponent sortedData = {this.state.data}></RenderComponent>
        </>
    )
    }
}
export default LeaderBoard
