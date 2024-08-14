import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 58,
      data : "You have reached the count down to zero ",
      minCount : 0
    };
  }

  static getDerivedStateFromProps(props, state){
    // let minCount  = 0;
    if(state.count === 60){
      this.setState({minCount : 1})
    }    
  
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.count >= 0) {
          return { count: prevState.count + 1 };
        }});
      }, 1000);
  }

  render() {
    return (
      <div>
        {
            this.state.count >= 0 
            ?
            <h1>Countdown: {this.state.count}</h1>
            :
            <>
            {/* <h1>Countdown: {this.state.count}</h1> */}
            <h1>{this.state.data}</h1>
            </>
        }
        {
          <p>{this.state.minCount}</p>
        }
      </div>
    );
  }
}

export default Countdown;


