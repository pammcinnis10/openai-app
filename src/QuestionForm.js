import React from "react";
import PresetButton from "./PresetButton";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // console.log("constructor is run");

    this.presets = [
      { label: "Calgary", question: "Where is Calgary?" },
      { label: "California", question: "Where is California?" },
    ];
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.onSubmit(this.state.value);
    event.preventDefault();
  };

  usePreset = (value) => {
    this.setState({ value: value });
  };

  render() {
    // console.log("render is run");

    return (
      <div className="flex items-center py-2">
        {this.presets.map((preset, index) => (
          <PresetButton
            key={index}
            onClick={this.usePreset}
            preset={preset.question}
          >
            {preset.label}
          </PresetButton>
        ))}

        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="question" className="sr-only">
              Question
            </label>
            <input
              id="question"
              name="question"
              type="text"
              disabled={this.props.loading}
              className={`ui input ${this.props.loading && "disabled"}`}
              placeholder="Type your question here"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              disabled={this.props.loading}
              type="submit"
              className={`ui primary animated button ${
                this.props.loading && "disabled"
              }`}
              value="Submit"
            >
              <div className="visible content">
                {this.props.loading ? "Pam is thinking" : "Ask Pam"}
              </div>
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
              {this.props.loading && <span></span>}
            </button>
          </div>

          {/* <input
            className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            value="Submit"
          >
            Submit
          </button> */}
        </form>
      </div>
    );
  }
}

export default QuestionForm;
