import axios from "axios"
import React from "react"

class LoginHooksClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            errorMsg : ""
        }
    }

    // componentDidMount(){
    //     axios.get("http://localhost:3001/ContactDetails").then((res) => this.setState({results : res.data})).catch((err) => console.log(err))
    // }

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
        const {navigate} = this.props.fun
        console.log(navigate)
        const {username, password} = this.state
        axios.get(`http://localhost:3001/UserDetails?uname=${this.state.username}`).then((res) => {
            const response = res.data[0]
            // console.log(username === '')
            if(response && username !== ''){
                // this.setState({errorMsg : "Please enter the correct username"})
                if(response.password === this.state.password){
                    navigate(`/dashboard/${username}`)
                }
                else{
                    this.setState({errorMsg : "please enter correct password"})
                }
            }
            else{
                alert("Need to create a user")
                navigate('/signin')
            }
        }) 
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
export default LoginHooksClass
