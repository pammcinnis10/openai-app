import PropTypes from "prop-types";

// sets the value of the input to a preset question
export default function PresetButton({ onClick, question, children }) {
  const handlePreset = () => {
    onClick(question);
  };

  return (
    <button
      className="button"
      style={{ width: "8rem" }}
      type="button"
      onClick={handlePreset}
    >
      {children}
    </button>
  );
}

PresetButton.propTypes = {
  onClick: PropTypes.func,
  question: PropTypes.string,
  children: PropTypes.node,
};
