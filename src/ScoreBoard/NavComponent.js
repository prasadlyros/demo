import React from "react"
import { Link } from "react-router-dom"
import "./active.css"

class NavComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rank : false,
            name : false,
            age : false,
            score : false
        }
    }

    componentDidMount(){
        console.log(this.props.keyword)
        if(this.props.keyword === 1){
            this.setState({rank : true})
        }
        else if(this.props.keyword === 2){
            this.setState({name : true})
        }
        else if(this.props.keyword === 3){
            this.setState({age : true})
        }
        else if (this.props.keyword === 4){
            this.setState({score : true})
        }
    }

    render(){
        return(
            <>
                <Link to='/'></Link>
                <Link to='/rank'><button className={this.state.rank? "active" : 'inactive'}>Rank</button></Link>
                <Link to='/name'><button className={this.state.name? "active" : 'inactive'}>Name</button></Link>
                <Link to='/age'><button className={this.state.age? "active" : 'inactive'}>Age</button></Link>
                <Link to='/points'><button className={this.state.score? "active" : 'inactive'}>Score</button></Link>
            </>
        )
    }
}

export default NavComponent
