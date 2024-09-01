import React from "react"
import _isEqual from "lodash/isEqual"
function TodoTrue(props){
    const {data, fun, del, trash} = props
    return(
        <>
        <h1>Completed Items</h1>
        {/* {console.log(data)} */}
        {console.log("inside completed")}
            {
                data.map((item) => (
                    <div key={item.id}>
                    <p>Title : {item.title}</p>
                    <p>Desc : {item.desc}</p>
                    <button onClick={(e) =>fun(e,item.id)}>Undo</button>
                    <button onClick={(e) =>trash(e,item.id)}>Trash</button>
                    <button onClick={(e)=> del(e,item.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default  TodoTrue 