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
      <li className="pb-2">
        <div class="card">
          <header class="card-header is-success">
            <p class="card-header-title">{this.props.prompt}</p>
          </header>
          <div className="card-content">
            <div className="content">{this.props.completion}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Completion;

// create form to input prompt
// capture prompt as variable and insert it into body of fetch request
// display prompt with answer in DOM - needs to be saved in a DOM element so it stays on the page when new prompts and responses are added
