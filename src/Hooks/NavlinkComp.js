import React from "react";
import { NavLink } from "react-router-dom";
import "./activeHooks.css"

class NavlinkComp extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <NavLink to="/login">
            {
              ({isActive}) => (
                <button className={isActive ? 'activeHooks' : "inactive"}>Login</button>
              )
            }
          </NavLink>
          <NavLink to = "/dashboard">
            {
                ({isActive}) => (
                  <button className={isActive? 'activeHooks' : "inactive"}>Dashboard</button>
                )
            }
          </NavLink>
            </>
        )
    }
}

export default NavlinkComp