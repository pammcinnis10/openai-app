import "./App.css";
import React from "react";
import QuestionForm from "./QuestionForm";
import Response from "./Response";
import openAI from "./openAi";

class App extends React.Component {
  state = {
    // array of { prompt: 'hello?', completion: 'hi!' }
    promptsCompletions: [],
  };

  handleQuestion = (questionValue) => {
    openAI(questionValue).then((response) => {
      const obj = {
        prompt: questionValue,
        completion: response,
      };
      this.setState(
        {
          promptsCompletions: [obj, ...this.state.promptsCompletions],
        },
        () => console.log(this.state)
      );
    });
    // this.setState({ question: questionValue });
  };

  render() {
    // console.log(this.state);
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
            matt={"here!"}
            pam={"yo!"}
          />

          <div>
            {this.state.promptsCompletions.map((promptCompletion, index) => (
              <div className="" key={index}>
                {promptCompletion.prompt}
                {promptCompletion.completion}
              </div>
            ))}
          </div>

          {/* <Response /> */}
        </header>
      </div>
    );
  }
}

export default App;
