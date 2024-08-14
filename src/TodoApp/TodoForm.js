import React from "react"

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [],
            title : '',
            desc : ''
        }
    }

    handleTitle = (e) => {
        this.setState({title : e.target.value})
        // console.log(e.target.value)
    }

    handleDesc = (e) => {
        this.setState({desc : e.target.value})
    }

    handleTodo = () => {
        const newTodo = {
            id : 4,
            title : this.state.title,
            desc : this .state.desc,
            status : false,
            active : true
        }

        const newValue = [this.state.todos,newTodo]
        console.log(newValue);
        this.setState({todos : newValue})
    } 

    render(){
        return(
            <> 
            
                <h2>Add Todod</h2>
                Title<input type="text" onChange={(e)=>{this.handleTitle(e)}}></input>
                Desc<input type="text" onChange={(e)=>{this.handleDesc(e)}}></input>
                <button onClick={()=>this.handleTodo()}>Add todo</button>
            
            </>
        )
    }
}

export default TodoForm