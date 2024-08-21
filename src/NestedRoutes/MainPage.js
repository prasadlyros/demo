import React from "react";
import { Outlet } from "react-router-dom";

class MainPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h1>Learning about Nested routes</h1>
                <Outlet></Outlet>
            </>
        )
    }
}

export default MainPage