import React from "react";

class Signout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <p>Please fill the details</p>
                <div>
                    <p>Name :</p>
                    <p>Id :</p>
                    <p>email :</p>
                </div>
                <button onClick={this.props.func}>Signin</button>
            </>
        )
    }
}

export default Signout  