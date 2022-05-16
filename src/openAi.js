const openAI = (question) => {
  // const question = "Why are giraffes so tall?"
  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt:
        '{"I am a highly intelligent question answering bot. My answers are short and concise. \nQ:" "' +
        question +
        '" \n"A: "}',
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    }),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        return result.choices[0].text;
        // this.setState({
        //   isLoaded: true,
        //   items: result.choices,
        // });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        return error;
        // this.setState({
        // isLoaded: true,
        // error,
        // });
      }
    );
};

export default openAI;
