// sets the value of the input to a preset question
export default function PresetButton({ key, onClick, preset, props }) {
  const handlePreset = () => {
    onClick(preset);
  };

  return (
    <button
      className="button"
      style={{ width: "8rem" }}
      type="button"
      onClick={handlePreset}
    ></button>
  );
}
