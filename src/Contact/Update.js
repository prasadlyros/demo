import React from "react"
import axios from "axios"
import "./contact.css"

class Update extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact : [],
            ipName : '',
            ipEmail : '',
            ipNo : '',
            statusMsg : '',
            buttonText : 'Create',
            selectedId: null
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/ContactDetails").then((res)=>this.setState({contact:res.data})).catch
        ((err)=>console.log(err))
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
        if(this.state.buttonText === "Create"){
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
        else{   
            e.preventDefault()
            axios.patch(`http://localhost:3001/ContactDetails/${this.state.selectedId}`,{
                cname : this.state.ipName,
                cemail : this.state.ipEmail,
                cno : this.state.ipNo
            }).then((res) => {
                const newData1 = this.state.contact.map((item) => 
                    item.id === this.state.selectedId ? res.data : item
                )
                // const newData = [...this.state.contact,res.data]
                this.setState({contact : newData1, buttonText : 'Create'})
            }).catch((err) => this.setState({statusMsg : "please try again"}))
            console.log("it is in update state")
        }
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

    handleButtonClick = (item) => {
        this.setState({buttonText : "Update", selectedId : item.id})
    }

    render(){
        return(
            <>
                <form >
                    <input className="input" type="text" placeholder="enter your name" onChange={(e)=>this.handleChange(e,"name")}></input>
                    <input type="mail" className="input" placeholder="enter your mail" onChange={(e)=> this.handleChange(e, "mail")}></input>
                    <input type="text" className="input" placeholder="enter your number" onChange={(e)=> this.handleChange(e, "number")}></input>
                    <button className="button" onClick={(e) => this.handleCreate(e)} type="button">{this.state.buttonText}</button>
                </form>
                {/* {console.log(button.target.value)} */}
                {
                    this.state.contact.map((item) => ( 
                        <div className="box">
                        <p>Name : {item.cname}</p>
                        <p>email : {item.cemail}</p>
                        <p>Phone : {item.cno}</p>
                        <button onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
                        <button onClick={() => this.handleButtonClick(item)}>Update</button>
                        <br></br>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Update







/**    
 * //    else {
    //         axios.patch(`http://localhost:3001/ContactDetails/${this.state.selectedId}`, {
    //           cname: this.state.ipName,
    //           cemail: this.state.ipEmail,
    //           cno: this.state.ipNo
    //         })
    //           .then((res) => {
    //             const updatedData = this.state.contact.map((item) =>
    //               item.id === this.state.selectedId ? res.data : item
    //             );
    //             this.setState({ contact: updatedData, statusMsg: "User updated successfully", buttonText: 'Create', selectedId: null, ipName: '', ipEmail: '', ipNo: '' }); // Clear input fields
    //           })
    //           .catch((err) => this.setState({ statusMsg: "Please try again" }));
    //       } 
    */