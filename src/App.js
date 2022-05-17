import React from "react";
import QuestionForm from "./QuestionForm";
import Completion from "./Completion";
import openAI from "./openAi";

// Root component
class App extends React.Component {
  state = {
    // formLoading indicates whether the API call is running
    formLoading: false,
    // promptsCompletions is an array of { prompt: 'hello?', completion: 'hi!' }
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

  // Accepts a prompt (question) from form. Calls the OpenAI API.
  // Updates state with an array of prompts/completions
  handleQuestion = (prompt) => {
    this.setState({ formLoading: true });
    openAI(prompt).then((completion) => {
      const obj = {
        prompt: prompt,
        completion: completion,
      };
      this.setState({
        promptsCompletions: [obj, ...this.state.promptsCompletions],
        formLoading: false,
      });
    });
  };

  render() {
    return (
      <div className="container is-max-desktop">
        {/* Title & Description */}
        <section className="section py-4">
          <h1 className="title is-1">Who is Pam McInnis?</h1>
          <h2 className="subtitle">
            An aspiring software developer located in Toronto, Ontario.
          </h2>
          <div className="container">
            <p>
              <span>About this app:</span> The OpenAI algorithm has been trained
              to answer questions about Pam's experience related to frontend
              development. Use the form below to ask questions about Pam.
              Answers will be displayed below. Some important features of this
              app include:
            </p>
            <ul>
              <li>
                The OpenAI API key is stored so as not to expose it on the
                client side of the production code.
              </li>
              <li></li>
            </ul>
          </div>
        </section>

        {/* 
          Question Form
          1. User submits the QuestionForm
          2. QuestionForm passes user input UP to App
          3. App makes the API call
          4. App passes the response into Completion
        */}
        <QuestionForm
          onSubmit={this.handleQuestion}
          loading={this.state.formLoading}
        />

        {/* display list of prompts and answers */}
        <section className="section py-4">
          <div className="container">
            <h2 className="title is-2">Answers</h2>

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
          <div className="container px-5">
            <p>
              Created by Pam McInnis.{" "}
              <a href="https://github.com/pammurray10">GitHub</a> |{" "}
              <a href="https://www.linkedin.com/in/mcinnispam/">LinkedIn</a>.
            </p>
            <p>
              <a href="https://github.com/pammurray10/openai-app">
                View source code and documentation.
              </a>
            </p>
            <p>MIT License, 2022.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
