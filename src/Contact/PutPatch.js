import axios from "axios"
import React from "react"

class PutPatch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact : [],
            ipName : '',
            ipEmail : '',
            ipNo : '',
            statusMsg : ''
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/ContactDetails").then((res)=>this.setState({contact:res.data})).catch
        ((err)=>console.log("error"))
    }

    handleChange = (e,inputWord) => {
        if(inputWord === "name"){
            this.setState({ipName : e.target.value})
        }
        else if(inputWord==="mail"){
            this.setState({ipEmail : e.target.value})
        }
        else{
            this.setState({ipNo : e.target.value})
        }
    }

    handleCreate = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/ContactDetails", {
            cname : this.state.ipName,
            cemail : this.state.ipEmail,
            cno : this.state.ipNo
        }).then((res) => {
            const newData = [...this.state.contact,res.data]
            this.setState({contact : newData, statusMsg : "Create user succesfully"})
        }).catch((err) => this.setState({statusMsg : "please try again"}))
    }

    handleUpdate = (e) =>{
        e.preventDefault()
        axios.patch("http://localhost:3001/ContactDetails/96a7", {
            cname : "Hermonie",
            cemail : "hermonie@gmail.com",
            cno : "2345678"
        }).then((res) => console.log(res)).catch((err) => console.log(err))
    }


    handleDelete = (e, inputId) => {
        e.preventDefault()
        axios.get(`http://localhost:3001/ContactDetails/${inputId}`)
        .then((res) => {
            const newData = this.state.contact
            const deleteData = newData.filter((item) => item.id !== inputId)
            this.setState({contact : deleteData})
        })
        .catch((err) => console.log(err));

        axios.delete(`http://localhost:3001/ContactDetails/${inputId}`).then((res) => console.log(res)).catch((err) => console.log(err));
    }

    render(){
        return(
        <>
                <form>
                    <input type="text" placeholder="enter your name" onChange={(e)=>this.handleChange(e,"name")}></input>
                    <input type="mail" placeholder="enter your mail" onChange={(e)=> this.handleChange(e, "mail")}></input>
                    <input type="text" placeholder="enter your number" onChange={(e)=> this.handleChange(e, "number")}></input>
                    <button onClick={(e) => this.handleCreate(e)}>Create</button>
                    {/* <button onClick={(e)=>this.handleUpdate(e)}>Update</button>
                    <button onClick={(e)=>this.handleDelete(e)}>Delete</button> */}
                </form>
                <br></br>
                {
                    this.state.contact.map((item) => (
                        <>
                        <p>Name : {item.cname}</p>
                        <p>email : {item.cemail}</p>
                        <p>Phone : {item.cno}</p>
                        <button onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
                        <br></br>
                        </>
                    ))
                }
            </>
        )
    }
}

export default PutPatch