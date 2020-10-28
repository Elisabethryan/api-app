import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super();
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form >
        <label>
          Alias:
          <input type="text" name="name" />
        </label>
        <label>
          Agent number:
          <input type="number" name="Agent number" />
        </label>
        <label>
          Number 1
          <input type="number" name="Number1" />
        </label>
        <label>
          Number 2
          <input type="number" name="Number2" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      );
    }
  }

export default Form;