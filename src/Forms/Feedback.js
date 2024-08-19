import React from 'react';
import "./form.css"

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      feedback: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleBlur = (e) => {
    console.log('focus changed from:', e.target.name);
  };

  handleFocus = (e) => {
    console.log('focus is on :', e.target.name);
  };

  handleFeedback = (e) => {
    e.preventDefault();
    console.log('Feedback Form Submitted', this.state);
  };

  render() {
    return (
      <form className='form-container'>
        <h2 className='form-header'>Feedback Form</h2>
          <label className='form-label'>Name:</label>
          <input className='form-input' type="text" name="name"  onChange={(e)=>this.handleChange(e)} onBlur={(e)=>this.handleBlur(e)} onFocus={(e) => this.handleFocus(e)}/>
          <label className='form-label'>Feedback:</label>
          <textarea className='form-input' name="feedback" onChange={(e)=>this.handleChange(e)} onFocus={(e) => this.handleFocus(e)} onBlur={(e)=>this.handleBlur(e)}/>
        <button className='form-button' type="button" onClick={(e)=>this.handleFeedback(e)} onFocus={(e) => this.handleFocus(e)}>Send Feedback</button>
      </form>
    );
  }
}

export default Feedback