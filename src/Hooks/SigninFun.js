import { useNavigate } from "react-router-dom";
import Signin from "./Signin";

function SigninFun (){
    let navigate = useNavigate()

    return(
        <>
            <Signin fun ={{navigate}}></Signin>
        </>
    )
}

export default SigninFun