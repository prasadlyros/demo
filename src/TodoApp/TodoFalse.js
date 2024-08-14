import React from "react"
import _isEqual from "lodash/isEqual"

class TodoFalse extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(props, state){
        // console.log('Should component in false');
        if(_isEqual(props.props2,this.props.props2)){
            return false
        }
        else{
            return true
        }
    }

    render(){
        const {props2, fun, fun1, del} = this.props
        console.log("pending")
        return(
            <>
            <h1>Pending tasks</h1>
            {
                props2.map((item) =>(
                    <div key={item.id}>
                        {/* <p>Id : {item.id}</p> */}
                        <p>Title : {item.title}</p>
                        <p>Desc : {item.desc}</p>
                        <button onClick={()=>fun(item.id)}>Done</button>
                        <button onClick={()=>fun1(item.id)}>Trash</button>
                        <button onClick={()=>del(item.id)}>Delete</button>
                    </div>
                ))
            }   
            </>
        )
    }
}

export default TodoFalse