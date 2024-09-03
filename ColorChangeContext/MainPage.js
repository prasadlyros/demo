import { useContext, useEffect } from "react"
import ColorContext from "./ColorContext"
import ColorChange from "./ColorChange"

function MainPage(){
    const {dark} = useContext(ColorContext)

    useEffect(() =>{
        document.body.style.backgroundColor = dark? "black" : "white"
    }, [dark])
    return(
        <>
            <ColorChange></ColorChange>
        </>
    )
}
export default MainPage