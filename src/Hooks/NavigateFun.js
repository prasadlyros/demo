import { useNavigate } from "react-router-dom";
import LoginHooksClass from "./LoginHooksClass";

function NavigateFun (){
    let navigate = useNavigate()

    return(
        <>
            <LoginHooksClass fun = {{navigate}}></LoginHooksClass>
        </>
    )
}

export default NavigateFun