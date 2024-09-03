import { useContext } from "react"
import ColorContext from "./ColorContext"

function ColorChange(){
    const {dark, changeFun} = useContext(ColorContext)
    return(
        <>
            <button onClick={(e) => changeFun(e)} style={{
                padding: '10px',
                borderRadius: '5px',
                // backgroundColor: dark ? 'black' : 'white',
                // color: dark? 'white' : 'black'
            }}>
               Toggle to {dark? 'Light' : 'Dark'} 
            </button>        
        </>
    )
}

export default ColorChange