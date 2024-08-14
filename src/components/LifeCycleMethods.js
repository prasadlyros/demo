import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg:"initial",
        }
    }
  static getDerivedStateFromProps(props,state){
       console.log("before")
    //    state.msg=props.msg
        console.log("after")
        return {msg:state.msg}
    }
    componentDidMount(){
        console.log("inside componentdidmount")
        setTimeout(()=>{
            this.setState({count:this.state.count+1})
        },3000)
        setTimeout(()=>{
            this.setState({msg:"final"})
        },3000)
    }
    render(){
        {console.log("render")}
        return(
            <>
            <h1>{this.state.count}</h1>
            <h2>{this.state.msg}</h2>   
            </>
        )
    }
}
export default LifeCycleMethods

