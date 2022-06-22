// prompt and completion displayed as list items
export default function Completion({ key, prompt, completion }) {
  return (
    <li className="pb-2">
      <div className="card">
        <header className="card-header is-success">
          <p className="card-header-title">{prompt}</p>
        </header>
        <div className="card-content">
          <div className="content">{completion}</div>
        </div>
      </div>
    </li>
  );
}

// create form to input prompt
// capture prompt as variable and insert it into body of fetch request
// display prompt with answer in DOM - needs to be saved in a DOM element so it stays on the page when new prompts and responses are added
