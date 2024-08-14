import React from "react"

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     return {user : props.data}
    // }

    componentDidMount() {
      setInterval(() => {
          this.setState(prevState => {
            if (prevState.count >= 0) {
              return { count: prevState.count + 1 };
            }});
          }, 1000);
      }

    render(){
        return(
            <>
                {
                    <h1>Countdown: {this.state.count} </h1>
                }
            </>
        )
    }
}

export default Counter