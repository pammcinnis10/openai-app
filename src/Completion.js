import React from "react";

class Completion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  render() {
    return (
      <li className="item">
        <div className="header">{this.props.prompt}</div>
        <div>{this.props.completion}</div>{" "}
      </li>
    );
  }
}

export default Completion;

// create form to input prompt
// capture prompt as variable and insert it into body of fetch request
// display prompt with answer in DOM - needs to be saved in a DOM element so it stays on the page when new prompts and responses are added
