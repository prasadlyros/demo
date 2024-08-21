import { useParams } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";

function Params(){
    let params = useParams()
    return(
        <>
            {console.log(params)}
            <Dashboard data = {params}></Dashboard>
        </>
    )
}

export default Params