import React from 'react';

class NewData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'programming'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite subject is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="aws">AWS Cloud</option>
              <option value="c">C</option>
            </select>
          </label>
          
          {/* <button type="submit">Registration</button> */}
          Comments:
          <textarea>
            
        </textarea>
        <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NewData;