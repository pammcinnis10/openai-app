import React from "react";
import PresetButton from "./PresetButton";

// Manages a set of buttons that fill out the form with preset questions
// Takes question as input
// Sets state with the value of the input
// On submit, runs a provided function
class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // console.log("constructor is run");

    this.presets = [
      {
        label: "Hire",
        question:
          "Would Pam be a good fit for the role of Frontend Developer Intern at Shopify?",
      },
      {
        label: "Experience",
        question: "What kind of software developer experience does Pam have?",
      },
      {
        label: "Projects",
        question: "What software projects has Pam worked on?",
      },
      {
        label: "Technologies",
        question: "What frontend technologies does Pam have experience with?",
      },
      { label: "Shopify", question: "What does Pam do at Shopify?" },
      { label: "Fun Facts", question: "What are some fun facts about Pam?" },
    ];
  }

  // implements a controlled form
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  // runs a provided function
  handleSubmit = (event) => {
    this.props.onSubmit(this.state.value);

    event.preventDefault();
  };

  // sets the value of the input with preset prompt
  usePreset = (value) => {
    this.setState({ value: value });
  };

  render() {
    return (
      <section className="section py-4 box">
        <h2 className="title is-2">Questions</h2>

        {/* Preset buttons */}
        <div className="container">
          <div className="buttons">
            {this.presets.map((preset, index) => (
              <PresetButton
                key={index}
                onClick={this.usePreset}
                question={preset.question}
              >
                {preset.label}
              </PresetButton>
            ))}
          </div>

          {/* Question form */}
          <form className="" onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="question" className="label">
                Ask Pam about her experience
              </label>
              <div className="control">
                <input
                  id="question"
                  required
                  minLength="10"
                  name="question"
                  type="text"
                  disabled={this.props.loading}
                  className="input"
                  placeholder="Example: How long has Pam worked at Shopify?"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div className="">
              {this.props.loading ? (
                <button
                  disabled
                  type="submit"
                  className="button is-link is-loading"
                  value="Submit"
                  style={{ width: "160px" }}
                ></button>
              ) : (
                <button
                  type="submit"
                  className="button is-link"
                  value="Submit"
                  style={{ width: "160px" }}
                >
                  Ask about Pam
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default QuestionForm;
