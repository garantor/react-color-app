import "./App.css";
import InputFields from "./Components/InputFields";
import Square from "./Components/Square";
import { useState } from "react";
function App() {
  const [colorValue, setcolorValue] = useState("");
  const [isDarkText, setisDarkText] = useState(true);
  const [hexValue, sethexValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setcolorValue("");
  }

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Square
        colorValue={colorValue}
        isDarkText={isDarkText}
        hexValue={hexValue}
      />

      <InputFields
        colorValue={colorValue}
        setcolorValue={setcolorValue}
        handleSubmit={handleSubmit}
        sethexValue={sethexValue}
        isDarkText={isDarkText}
        setisDarkText={setisDarkText}
      />
    </div>
  );
}

export default App;
