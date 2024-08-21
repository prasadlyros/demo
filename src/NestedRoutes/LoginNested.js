import React from "react"

class LoginNested extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            errorMsg : ""
        }
    }

    handleInput = (e, keyword) => {
        if(keyword === "username"){
            this.setState({username : e.target.value})
        }
        else {
            this.setState({password : e.target.value})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        e.preventDefault()
        if(!username || !password){
            this.setState({errorMsg : "Please enter the required feilds"})
        }
        else{
            console.log("Login has been successfull")
        }
    }

    render(){
        return(
            <>
                <form className="form-container">
                    <h2 className='form-header'>Login Form</h2>
                    <label className="form-label">Username</label>
                    <input className="form-input" type="text" name="username" placeholder="enter your name" onChange={(e) => this.handleInput(e, "username")}></input>
                    <label className="form-label">Password</label>
                    <input className="form-input" type="password" name="password" placeholder="enter your password" onChange={(e) => this.handleInput(e, "password")}></input>
                    <p className="form-error">{this.state.errorMsg}</p>
                    <button className="form-button" type="button" onClick={(e) => this.handleSubmit(e)}>Login</button>
                </form>
            </>
        )
        
    }
}
export default LoginNested
