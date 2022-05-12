import './App.css';
import React from 'react';



class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A question was submitted: ' + this.state.value);
    this.props.onSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="flex items-center border-b border-teal-500 py-2">
      
        <form class="w-full max-w-sm" onSubmit={this.handleSubmit}>
        
        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={this.state.value} onChange={this.handleChange} />
        
        <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" value="Submit">
        Submit
        </button>
      
      </form>
      
      </div>
    );
  }
}

export default QuestionForm;