import React from "react";
class ClassName extends React.Component{
    constructor(props){
        super(props)
        this.fname="peter"
    }
    changeName=()=>{
        this.fname="john"
        console.log("inside func",this.fname)
        {this.render()}
    }
    render(){
        
        return(
            <>
            <h1>Demo</h1>
            <h2>Hello {this.fname}</h2>
            <button onClick={this.changeName}>change</button>
            </>
        )
    }
}
export default ClassName

