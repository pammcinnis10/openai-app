import React from "react";

// sets the value of the input to a preset question
class PresetButton extends React.Component {
  handlePreset = () => {
    this.props.onClick(this.props.preset);
  };

  render() {
    return (
      <button
        className="button"
        style={{ width: "8rem" }}
        type="button"
        onClick={this.handlePreset}
      >
        {this.props.children}
      </button>
    );
  }
}

export default PresetButton;
