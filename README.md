# Shopify Frontend Developer Intern application: Who is Pam McInnis?

This app uses the OpenAI algorithm to answer questions about Pam McInnis as they relate to her application for a position as a Frontend Developer Intern at Shopify.

Open the [live application](https://openai-app.pages.dev/) and click the preset buttons to ask some questions about Pam and learn why she'd be great for the role!

The app is deployed using Cloudflare pages.

## Cool Features

### OpenAI API key injected at build time

While developing this app I noticed OpenAI was crawling Github, looking for exposed API keys, and automatically cycling exposed keys. This caused my production app to stop working. Since I wanted this app to work when my application is reviewed, I needed to avoid storing my OpenAI API key in Github.

As a solution, my API is injected into the app at build time by Cloudflare pages. Locally, I use a `.env.development.local` file to manage my key. Although this still exposes my API key on the frontend, it should be enough to avoid OpenAI determining my key has been leaked and triggering a key rotation thus making sure the Shopify team can try my app!

### Algorithm has been specialized to answer general interview questions about Pam

The OpenAI algorithm has been trained to answer questions about Pam and why she'd be great for the frontend developer internship at Shopify. You can ask preset questions using the buttons above the text input, and ask your own questions too! The algorithm is still learning and some of its answers might seem a bit funny. So unless the app is telling you what a great developer I am 🙂 it may be best to take its responses with a grain of salt.
