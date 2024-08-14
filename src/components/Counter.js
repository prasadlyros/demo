import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }

    handlePlus=()=>{
        this.setState(count=>({
        counter : count.counter+1
        }))
    }

    handleMinus = () =>{
        this.setState(count =>({
            counter : count .counter-1
        }))
    }
    render(){
        return(
            <>
                <h2>{this.state.counter}</h2>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </>
        )
    }
}

export default Counter