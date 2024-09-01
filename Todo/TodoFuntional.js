import { useEffect, useState } from "react"
import userData from "../data"
import TodoTrue from "./TodoTrue"
import TodoFalse from "./TodoFalse"
import TodoTrash from "./TodoTrash"

function TodoFunctional(){
    const [todo, setTodo] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [id, setId] = useState(0)

    const handleTitle = (e, keyword) => {
        if(keyword === "title"){
            setTitle(e.target.value)
        }
        else if (keyword === "desc"){
            setDesc(e.target.value)
        }
    }

    const addTodo = () => {
        const newTodo = {
            id : id+1,
            title : title,
            desc : desc,
            status : false,
            active : true
        }

        const newValue = [...todo,newTodo]
        console.log(newValue)
        setId(id+1)
        setTodo(newValue)
    }

    const getCompletedItems = () => {
        const todoTrue = todo.filter(item => item.status === true && item.active === true);
        return todoTrue
    }

    const getPendingItems = ()=> {
        const todofalse = todo.filter(item => item.status === false && item.active === true);
        return todofalse
    }

    const getTrashItems = () => {
        const todoTrash = todo.filter(item => item.active === false)
        return todoTrash
    }
    
    const changeFunction = (e,todoId) =>{
        e.preventDefault()
        // const newTodo = todo
        // const obj  = newTodo.find((item) => item.id === todoId) 
        // obj.status = !obj.status
        // setTodo(newTodo)
        // console.log(newTodo)
        setTodo(todo.map((item)=>{
            if(item.id===todoId){
                return {...item,status:!item.status}
            }
            else{
                return item
            }
        }))
    };

    const trashFunction = (e,todoId) => {
        e.preventDefault()
        // const newTodo = todo
        // const obj = newTodo.find((item) => item.id === todoId)
        // obj.active = !obj.active
        // setTodo(newTodo)  
        setTodo(todo.map((item)=>{
            if(item.id===todoId){
                return {...item,active:!item.active}
            }
            else{
                return item
            }
        }))
    }

    const deleteTodo = (e,todoId) => {
        const deleteTodo = todo
        const updatedTodos = deleteTodo.filter((item) => item.id !== todoId);

        setTodo(updatedTodos)
    };


    return(
        <>
        {/* {console.log(todo)} */}
        {console.log("inside parent")}
            {
                
                <>
                    Title : <input type="text" onChange={(e) => handleTitle(e,"title")}></input>
                    Desc : <input type="text" onChange={(e) => handleTitle(e, "desc")}></input>
                    <button type="button" onClick={() => addTodo()}>Add todo</button>
                </>
            }
            <TodoTrue data={getCompletedItems()}  fun = {changeFunction} trash = {trashFunction} del = {deleteTodo}></TodoTrue>
            <TodoFalse data = {getPendingItems()} fun = {changeFunction} trash = {trashFunction} del = {deleteTodo}></TodoFalse>
            <TodoTrash data = {getTrashItems()} fun ={trashFunction} del = {deleteTodo}></TodoTrash>
        </>
    )
}

export default TodoFunctional
