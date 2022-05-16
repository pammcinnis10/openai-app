import React from "react";

class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {}
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item, index) => (
            <li className="text-3xl font-bold underline" key={index}>
              {item.text}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Response;

// create form to input prompt
// capture prompt as variable and insert it into body of fetch request
// display prompt with answer in DOM - needs to be saved in a DOM element so it stays on the page when new prompts and responses are added
