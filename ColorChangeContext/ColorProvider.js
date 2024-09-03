import { useState } from "react"
import ColorContext from "./ColorContext"
import MainPage from "./MainPage"

function ColorProvider(){
    const [dark, setDark]= useState(false)

    const changeFun = () => {
        setDark(color => ! color)
    }
    return(
        <>
            <ColorContext.Provider value={{dark,changeFun}}>
                <MainPage></MainPage>
            </ColorContext.Provider>        
        </>
    )
}

export default ColorProvider