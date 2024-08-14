import React from "react"

class SimpleApi extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            results :[]
        }
    }

    componentDidMount(e){
        // e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => this.setState({results : res})).catch((err) => console.log(err))   
    }

    render(){
        return(
            <>
                {/* <button onClick={(e) => this.handleApi(e)}>Call Api</button> */}
            
            {
                this.state.results.map((item) => (
                    <>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </>
                ))
            }
            </>
        )
    }
}

export default SimpleApi