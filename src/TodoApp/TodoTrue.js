import React from "react"
import _isEqual from "lodash/isEqual"

class TodoTrue extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(props, state){
        // console.log('Should component in true');
        if(_isEqual(props.props1,this.props.props1)){
            return false
        }
        else{
            return true
        }
    }

    render(){
        const {props1, fun, fun1, del} = this.props
        console.log("Completed")
        return(
            <>
            <h1>Completed tasks</h1>
            {
                props1.map((item) =>(
                    <div key={item.id}>
                        {/* <p>Id : {item.id}</p> */}
                        <p>Title : {item.title}</p>
                        <p>Desc : {item.desc}</p>
                        <button onClick={() =>fun(item.id)}>Undo</button>
                        <button onClick={() =>fun1(item.id)}>Trash</button>
                        <button onClick={()=> del(item.id)}>Delete</button>
                    </div>
                ))
            }   
            </>
        )
    }
}

export default TodoTrue

/** 
 *     <div>
                        <p>Id : {this.id}</p>
                        <p>Title : {this.props.title}</p>
                        <p>Desc : {this.props.desc}</p>
                    </div>
*/