import hocComponent from "./hocComponent";
import React from "react"

class ChildComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {props1, handleInput, handleSearch} = this.props
        return(
            <>
                <input type="text" onChange={(e)=> handleInput(e)} placeholder="enter word to search"></input>
                <button onClick={(e)=>handleSearch(e)}>Search</button>
                {
                    props1.map((item) => (
                        <img src={item.urls.small}></img>
                    ))
                }
            </>
        )
    }
}

export default hocComponent(ChildComponent)