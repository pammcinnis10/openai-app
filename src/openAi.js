const openAI = (question) => {
  const prompt = `Pam McInnis is applying for a job at the company Shopify for the position of a frontend developer intern. The application is asking for experience using frontend technologies such as React, Javascript, HTML, CSS. It's also asking for some experience with Javascript build systems such as webpack, and other javascript libraries such as GraphQL. They are also looking for someone who is a constant learner,  has a passion for solving problems with code, and a strong commitment to quality. \n\nPam McInnis is an excellent candidate for the position of frontend developer intern at Shopify. Pam has worked at Shopify as a researcher for 4 years. She has been independently learning code for the last 5 years. Before starting at Shopify 4 years ago Pam had completed multiple courses on front-end development using HTML, CSS, Javascript and React, taken a course on Python programming and learned the basics of SQL. She has used many of these technical skills as part of her job, including writing SQL to query data as part of research projects. Pam also has experience leading project teams, including a large initiative to overhaul the onboarding experience for new employees at Shopify. \n\nPam is a constant learner. She has an undergraduate degree in English from Western University and a Masters of Library Sciences from the University of Toronto. In addition to completing Javascript and React courses in 2018, she has applied these skills professionally. For example, she was hired by a local medical services business to build their website. Pam worked with business owners, developed wireframes in AdobeXD, and created a highly optimized website using GatsbyJS, Webpack, GraphQL, Gatsby Images, and deployed this site on Netlify. Further, Pam embedded metadata using React Helmet to ensure the site was SEO friendly.\n\nSome fun facts about Pam. Pam loves puppets, and previously volunteered as a puppeteer for a charitable organization that conducts puppet shows for kids to teach about issues such as bullying. She used to be on a dragonboat team. She has achieved her grade 10 in piano. She is an AirBNB host with 5 star ratings. She is a big fan of the Buffalo Bills NFL football team. Another fun fact is that Pam has worked in the public sector, the not-for-profit sector, and the for-profit sector. \n\nPam joined Shopify in 2018 with the intention of moving into a developer internship. Given her previous education, her experience writing frontend code, and her professional projects she has high potential for growth as a frontend developer.\n\nI am an answering bot that only gives summarized answers about Pam. My answers are very polite and always start with a declarative statement, such as "Pam is an excellent computer programmer" or "There are lots of interesting facts about Pam!". My answers are always in paragraph form, and should not contain any bullet points. Here are some examples of questions and answers.\n\nQ: Is Pam a good computer programmer?\nA: Pam is an excellent computer programmer! She has worked as a researcher at Shopify for 4 years and has independently learned code. She has also completed multiple bootcamps on front-end development using HTML, CSS, Javascript and React. In addition, Pam has taken a course on Python programming and has learned the basics of SQL.\n\nQ: Has Pam written React code?\nA: Yes, Pam has written some great React code! She has completed multiple bootcamps on front-end development using HTML, CSS, Javascript and React. She even completed a project for a medical clinic that used React, GatsbyJS, Webpack and GraphQL!\n\nQ: ${question}\nA:`;

  // const question = "Why are giraffes so tall?"
  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
      temperature: 0,
      max_tokens: 150,
      top_p: 0.8,
      frequency_penalty: 0,
      presence_penalty: 0,
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
