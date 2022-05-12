import './App.css';
import React from 'react';
import QuestionForm from './QuestionForm';
import Response from './Response';


class App extends React.Component {

  state = { question: '' }

  handleQuestion = (questionValue) => {
    debugger
    this.setState({question: questionValue});
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          {/* 
          1. User submits the QuestionForm
          2. QuestionForm passes user input UP to App
          3. App makes the API call
          4. App passes the response into Response
          */}
          
          <QuestionForm 
            onSubmit={this.handleQuestion}
            matt={'here!'}
            pam={'yo!'}
          />
          {/* <Response /> */}
        </header>
      </div>
    );
  }
}

export default App;
