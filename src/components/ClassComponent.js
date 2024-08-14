import React from "react";

class ClassComponent extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <>
                {console.log(this.props)}   
                <h1>Class Component {this.fname}</h1>
            </>
        )
    }
}

export default ClassComponent