import React from "react"
import TodoFalse from "./TodoFalse";
import TodoTrue from "./TodoTrue";
import TodoTrash from "./TodoTrash";

class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [],
            title : '',
            desc : ''
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     const todoTrue = props.data.filter(item => item.status === true);
    //     const todofalse = props.data.filter(item => item.status === false);

    //     return {todoTrue, todofalse}
    // }

    //dsp method cant be used to permanantly delete todo

    // static getDerivedStateFromProps(props, state){
    //     return {todos:props.data}
    // }

    handleTitle = (e) => {
        this.setState({title : e.target.value})
        // console.log(e.target.value)
    }

    handleDesc = (e) => {
        this.setState({desc : e.target.value})
    }

    handleTodo = () => {
            const newTodo = {
            id : this.state.todos.length + 1,
            title : this.state.title,
            desc : this .state.desc,
            status : false,
            active : true
        }   

        const newValue = [...this.state.todos,newTodo]        
        console.log(newValue);
        this.setState({todos : newValue})
    }
    

    getCompletedItems = () => {
        const todoTrue = this.state.todos.filter(item => item.status === true && item.active === true);
        return todoTrue
    }

    getPendingItems = ()=> {
        const todofalse = this.state.todos.filter(item => item.status === false && item.active === true);
        return todofalse
    }

    getTrashItems = () => {
        const todoTrash = this.state.todos.filter(item => item.active === false)
        return todoTrash
    }

    changeFunction = (todoId) =>{
        const newTodo = this.state.todos
        const obj  = newTodo.find((item) => item.id === todoId) 
        obj.status = !obj.status
        this.setState({todos : newTodo})
    };

    trashFunction = (todoId) => {
        const newTodo = this.state.todos
        const obj = newTodo.find((item) => item.id === todoId)
        obj.active = !obj.active
        this.setState({todos : newTodo})    
    }

    deleteTodo = (todoId) => {
        const deleteTodo = this.state.todos
        const updatedTodos = deleteTodo.filter((item) => item.id !== todoId);
        // updatedTodos.active = null
        this.setState({ todos: updatedTodos });
    };

    /*shouldComponentUpdate(props, state){
        // this.getTrashItems()
        console.log('Should component');
        if(this.state.todos === state.status){
            return true
        }
        else {
            return false
        }
    }*/

    render(){
        console.log("parent")
        return(
            <>
                {/* <TodosComponent fun = {this.changeFunction} props1 = {this.getCompletedItems()}></TodosComponent> */}
                {/* <TodosComponent props1 = {this.getPendingItems()}></TodosComponent> */}
                <> 
                    <h2>Add Todod</h2>
                    Title<input type="text" onChange={(e)=>{this.handleTitle(e)}}></input>
                    Desc<input type="text" onChange={(e)=>{this.handleDesc(e)}}></input>
                    <button onClick={()=>this.handleTodo()}>Add todo</button>
                </>
                <TodoFalse fun1={this.trashFunction} fun = {this.changeFunction} props2 = {this.getPendingItems()} del = {this.deleteTodo}></TodoFalse>
                <TodoTrue fun1 = {this.trashFunction} fun = {this.changeFunction} props1 = {this.getCompletedItems()} del = {this.deleteTodo}></TodoTrue>
                <TodoTrash fun = {this.trashFunction} props3 = {this.getTrashItems()} del = {this.deleteTodo}></TodoTrash>
            </>
        )
    }
}

export default TodoComponent


/*                { 
                    this.state.todoTrue.length !== 0
                    ?
                        <div>
                            <h1>Completed tasks</h1>
                            {
                                this.state.todoTrue.map(item =>(
                                    <>
                                    <TodosComponent key={item.id} {...item}></TodosComponent>
                                    <button>Undo</button>
                                    </>
                                ))
                            }
                        </div>
                    :
                    <h1>No completed tasks</h1>
                }
                {
                    this.state.todofalse.length !== 0
                    ?
                        <div>
                            <h1>Pending tasks</h1>
                            {
                                this.state.todofalse.map(item => (
                                    <>
                                    <TodosComponent key={item.id} {...item}></TodosComponent>
                                    <button>Done</button>
                                    </>
                                ))
                            }
                        </div>
                    :
                    <h1>No pending tasks</h1>    
                }  */                
                    