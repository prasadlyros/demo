import react from "react"
class StateUSe extends react.Component {
    constructor(props){
        super(props)
        this.state={
            isLogged : true
        }
    }

    /*logFun = ()=>{
        if(this.state.isLogged){
            this.setState({isLogged:false})
        }
        else{
            this.setState({isLogged:true})
        }
    }*/

    tuggle = ()=>{
        this.setState({isLogged : !(this.state.isLogged)})
    }

    render(){
        return(
            <>
                {
                    this.state.isLogged
                    ?
                    <>
                    <h1>Welcome User</h1>
                    <button onClick={this.tuggle}>Logout</button>
                    </>
                    :
                    <>
                    <h1>Please login</h1>
                    <button onClick={this.tuggle}>Login</button>
                    </>
                }
            </>
        )
    }
}

export default StateUSe