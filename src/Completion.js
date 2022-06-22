import PropTypes from "prop-types";

// prompt and completion displayed as list items
export default function Completion({ prompt, completion }) {
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

Completion.propTypes = {
  prompt: PropTypes.string.isRequired,
  completion: PropTypes.string.isRequired,
};
