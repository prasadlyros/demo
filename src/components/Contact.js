import react from "react"
import Signin from "./Signin"
import Signout from "./Signout"

class Contact extends react.Component{
    constructor(){
        super()
        this.state={
            users : [
                {
                    name : "Harry",
                    id : 12345,
                    email : "harrygmail.com",  
                    signin : true
                }
            ]
    }
    }

    // singninout = ()=>{
    //     if(this.state.users[0].signin){
    //         this.setState({users[0].signin : false})
    //     }
    //     else{
    //         this.setState({signin:true})
    //     }
    // }

//    singninout = () => {
//         this.setState(prevState => {
//             const updatedUsers = [...prevState.users];
//             updatedUsers[0] = {
//                 ...updatedUsers[0],
//                 signin: !updatedUsers[0].signin
//             };
    
//             return { users: updatedUsers };
//         });
//     };

    login = () => {
        this.setState(prevUsers => {
            const newUsers = [...prevUsers.users];
            newUsers[0] = {
                ...newUsers[0],
                signin : !newUsers[0].signin
            };
            return {users : newUsers};
        });
    };

   /* singninout = () => {
        // const value = this.state.users[0].signin;
        // let value1 = !value
        // console.log(value1);
        const updatedUsers = [this.state.users]; 
        updatedUsers[0].signin = !updatedUsers[0].signin; 
        this.setState({ users: updatedUsers });
    };*/
   
    render(){
        console.log(this.state.users[0].signin)
        return(
            <>
                { 
                    this.state.users[0].signin
                    ?
                    <Signin  func = {this.login} data={this.state.users[0]}></Signin>
                    :
                    <Signout func = {this.login}></Signout>
                }
            </>
        )
    }
}

export default Contact


//  = [
//     first = {
//         name : "Harry",
//         id : 12345,
//         email : "harrygmail.com",  
//         signin : true
//     }
//  ]