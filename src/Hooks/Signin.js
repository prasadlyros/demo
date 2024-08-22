import axios from 'axios';
import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      err:''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  handleSubmit = (e) => {
    const {navigate} = this.props.fun
    console.log(navigate)
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({err : "password is not matching"})
      return
    } else {
      axios.post(`http://localhost:3001/UserDetails`, {
        uname : this.state.username,
        password : this.state.password,
        email : this.state.email
      }).then((res) => {
        navigate(`/dashboard/${this.state.username}`)
      }).catch((err) => console.log(err));
    }
  };

  

  render() {
    return (
      <form className='form-container'>
        <h2 className='form-header'>Signin Form</h2>
          <label className='form-label'>Username:</label>
          <input type="text" className='form-input' name="username" onChange={(e)=>this.handleChange(e)}/>
          <label className='form-label'>Email:</label>
          <input className='form-input' type="email" name="email" onChange={(e)=>this.handleChange(e)}/>
          <label className='form-label'>Password:</label>
          <input className='form-input' type="password" name="password" onChange={(e)=>this.handleChange(e)}/>
          <label className='form-label'>Confirm Password:</label>
          <input className='form-input' type="password" name="confirmPassword" onChange={(e)=>this.handleChange(e)}/>
          <p className='form-error'>{this.state.err}</p>
        <button type="button" onClick={(e)=>this.handleSubmit(e)} className='form-button'>Signin</button>
      </form>
    );
  }
}

export default Signin




























/**
 * handleDoubleClick = (e) => {
    console.log('Field was double-clicked:', e.target.name);
  };

  handleBlur = (e) => {
    console.log('Input lost focus:', e.target.name);
  };
 */