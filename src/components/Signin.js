import React from "react"

class Signin extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {name, id, email} = this.props.data
        return(
            <>
                <div>
                        <p>Name : {name}</p>
                        <p>Id : {id}</p>
                        <p>email : {email}</p>
                </div>
                <button onClick={this.props.func}>Signout</button>
            </>
        )
    }
}

export default Signin