import React from "react"
import Counter from "./Counting";
import countData from "../data";

class TimeOut extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            sec : 57,
            min : 58,
            Hr : 0
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     return {state : props.data}
    // }

    componentDidMount(){
        setInterval(() => {
            this.setState(newState =>{
                let {sec, min, Hr} = newState;
                if(sec < 59){
                    sec = sec+1;
                }else if (min < 59){
                    sec = 0
                    min = min + 1;
                } else {
                    sec = 0;
                    min = 0;
                    Hr = Hr +1;
                }
                return {sec, min, Hr}
            });
        }, 1000);
    }
    
    render(){
        return(
            <>
                {
                    <>
                    <Counter data = {countData}></Counter>
                        <div>
                            <p>{this.state.Hr} : Hr  {this.state.min} : Min {this.state.sec} : sec</p>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default TimeOut