import React from "react";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // console.log("constructor is run");

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    // console.log("render is run");

    return (
      <div className="flex items-center py-2">
        <form className="w-full max-w-sm" onSubmit={this.handleSubmit}>
          <div>
            <label
              for="question"
              class="block text-sm font-medium text-gray-700 sr-only"
            >
              Question
            </label>
            <div class="mt-1">
              <textarea
                id="question"
                name="question"
                rows="3"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Type your question here"
                value={this.state.value}
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              value="Submit"
            >
              Submit
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
