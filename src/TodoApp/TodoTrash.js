import React from "react"
import _isEqual from "lodash/isEqual"

class TodoTrash extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(props, state){
        // console.log('Should component in trash');
        if(_isEqual(props.props3 === this.props.props3)){
            return false
        }
        else{
            return true
        }
    }

    render(){
        const {props3, fun, del} = this.props
        console.log("Trash")
        return(
            <>
            <h1>Trash Items</h1>
            {
                props3.map((item) =>(
                    <div key={item.id}>
                        {/* <p>Id : {item.id}</p> */}
                        <p>Title : {item.title}</p>
                        <p>Desc : {item.desc}</p>
                        <button onClick={() =>fun(item.id)}>Undo</button>
                        <button onClick={() =>del(item.id)}>Delete</button>
                    </div>
                ))
            }   
            </>
        )
    }
}

export default TodoTrash