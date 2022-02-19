import React from "react";
import colorNames from "colornames";

function InputFields({
  colorValue,
  setcolorValue,
  handleSubmit,
  sethexValue,
  isDarkText,
  setisDarkText,
}) {
  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <label htmlFor="colorForm"> Color </label>
      <input
        type="text"
        id="colorForm"
        placeholder="enter color name"
        autoFocus
        required
        value={colorValue}
        onChange={(e) => {
          setcolorValue(e.target.value);
          sethexValue(colorNames(e.target.value)); 
        }}
      />
      <button type="button" onClick={() => setisDarkText(!isDarkText)}>
          Toggle Text Color
      </button>
    </form>
  );
}

export default InputFields;
