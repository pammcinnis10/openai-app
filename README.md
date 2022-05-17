# Shopify Frontend Developer Intern application: who is Pam McInnis?

This app uses the OpenAI algorithm to answer questions about Pam McInnis as they relate to her application for a position as a Frontend Developer Intern at Shopify.

TODO: Link to live application
TODO: "Click the preset buttons to ask some questions"
TODO: "It's deployed using Cloudflare pages"

## Cool Features

### OpenAI API key injected at build time

While developing this app I noticed OpenAI was crawling Github, looking for exposed API keys, and automatically cycling exposed keys. This caused my production app to stop working. Since I wanted this app to work when my application is reviewed, I needed to avoid storing my OpenAI API key in Github.

As a solution, my API is injected into the app at build time by Cloudflare pages. Locally, I use a `.env.local` file to manage my key. Although this still exposes my API key on the frontend, it should be enough to avoid OpenAI determining my key has been leaked and triggering a key rotation thus making sure the Shopify team can try my app!

### Algorithm is specialized to answer

While developing this app I noticed OpenAI was crawling Github, looking for exposed API keys, and automatically cycling exposed keys. This caused my production app to stop working. Since I wanted this app to work when my application is reviewed, I needed to avoid storing my OpenAI API key in Github.

As a solution, my API is injected into the app at build time by Cloudflare pages. Locally, I use a `.env.local` file to manage my key. Although this still exposes my API key on the frontend, it should be enough to avoid OpenAI determining my key has been leaked and triggering a key rotation thus making sure the Shopify team can try my app!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# OpenAI-app
