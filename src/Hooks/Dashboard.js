import React from "react";

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {username} = this.props.data
        {console.log(username)}
        return(
            <>
                <h1>We are getting into dashboard component by using navigate fun</h1>
                <p>Hello : {username}</p>
            </>
        )
    }
}

export default Dashboard