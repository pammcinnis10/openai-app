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
    promptsCompletions: [],
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
            <h2 className="title is-3">About this app</h2>
            <p>
              The OpenAI algorithm has been trained to tell you why Pam would be
              great for the role of Frontend Developer Intern at Shopify!
            </p>
            <p className="py-3">
              Use the form below to ask questions about Pam, and check out the
              preset questions using the buttons above the text input.
            </p>
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
