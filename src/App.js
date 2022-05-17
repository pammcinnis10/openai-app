import React from "react";
import QuestionForm from "./QuestionForm";
import Completion from "./Completion";
import openAI from "./openAi";

class App extends React.Component {
  state = {
    formLoading: false,
    // array of { prompt: 'hello?', completion: 'hi!' }
    promptsCompletions: [
      {
        prompt: "Where is Toronto?",
        completion: "Toronto is located in the province of Ontario.",
      },
      {
        prompt: "Where is Toledo?",
        completion: "Toledo is located in the state of Ohio.",
      },
    ],
  };

  handleQuestion = (questionValue) => {
    this.setState({ formLoading: true });
    openAI(questionValue).then((response) => {
      const obj = {
        prompt: questionValue,
        completion: response,
      };
      this.setState(
        {
          promptsCompletions: [obj, ...this.state.promptsCompletions],
          formLoading: false,
        },
        () => console.log(this.state)
      );
    });
    // this.setState({ question: questionValue });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="container mx-auto">
        <h1>Questions & Answers!</h1>
        {/* 
          1. User submits the QuestionForm
          2. QuestionForm passes user input UP to App
          3. App makes the API call
          4. App passes the response into Response
          */}
        <QuestionForm
          onSubmit={this.handleQuestion}
          loading={this.state.formLoading}
        />

        <ul
          id="remove-bullets"
          className="ui celled list"
          style={{ listStyleType: "none" }}
        >
          {this.state.promptsCompletions.map((promptCompletion, index) => (
            <Completion
              key={index}
              prompt={promptCompletion.prompt}
              completion={promptCompletion.completion}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
