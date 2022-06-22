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
