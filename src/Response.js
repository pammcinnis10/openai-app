import React from 'react';
import './App.css';

class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    const question = "Why are giraffes so tall?"
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: "{\"I am a highly intelligent question answering bot. My answers are short and concise. \nQ:\" \""+question+"\" \n\"A: \"}",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"]
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.choices
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
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

