import React from 'react';
import "./form.css"

class Register extends React.Component {
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

  handleBlur = (e) => {
    console.log('Input lost focus:', e.target.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      console.log('passwords does not match')
    } else {
      console.log('Registration Form Submitted', this.state);
    }
  };

  handleDoubleClick = (e) => {
    console.log('Field was double-clicked:', e.target.name);
  };

  render() {
    return (
      <form className='form-container'>
        <h2 className='form-header'>Registration Form</h2>
          <label className='form-label'>Username:</label>
          <input type="text" className='form-input' name="username" onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
          <label className='form-label'>Email:</label>
          <input className='form-input' type="email" name="email" onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
          <label className='form-label'>Password:</label>
          <input className='form-input' type="password" name="password" onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
          <label className='form-label'>Confirm Password:</label>
          <input className='form-input' type="password" name="confirmPassword" onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onDoubleClick={(e)=>this.handleDoubleClick(e)}/>
          <p className='form-error'>{this.state.err}</p>
        <button type="button" onClick={(e)=>this.handleSubmit(e)} className='form-button'>Register</button>
      </form>
    );
  }
}

export default Register
