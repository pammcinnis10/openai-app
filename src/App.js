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
      <div className="container is-max-desktop">
        <section className="section py-4">
          <h1 className="title is-1">Who is Pam McInnis?</h1>
          <div className="container">
            <p>
              Pam is an aspiring software developer located in Toronto, Ontario.
            </p>
            <p>
              <span>About this app:</span> The OpenAI algorithm has been trained
              to answer questions about Pam's experience related to frontend
              development. Use the form below to ask questions about Pam.
              Answers will be displayed below. Some important features of this
              app include:
              <ul>
                <li>
                  The OpenAI API key is stored so as not to expose it on the
                  client side of the production code.
                </li>
                <li></li>
              </ul>
            </p>
          </div>
        </section>

        <section className="section py-4 box">
          <h2 className="title is-2">Questions</h2>

          <div className="container">
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
          </div>
        </section>

        {/* display list of prompts and answers */}
        <section className="section py-4">
          <h2 className="title is-2">Answers</h2>
          <div className="container">
            <ul
              id="remove-bullets"
              className=""
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
        </section>
        <footer className="footer">
          <div className="container">
            <ul className="">
              <li className="item">LinkedIn</li>
              <li className="item">Github</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
