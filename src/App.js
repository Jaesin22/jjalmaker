import React, { useState } from "react";
import Head from "./components/Head";
import FontType from "./components/FontType";
import Text from "./components/Text";
import FontSize from "./components/FontSize";
import FontColor from "./components/FontColor";
import FontThickness from "./components/FontThickness";
import FontBorder from "./components/FontBorder";
import Preview from "./Func/Preview";

function App() {
  const [text, setText] = useState(" ");
  const [color, setColor] = useState("#000000");
  const [selectedFontSize, setSelectedFontSize] = useState(30);
  const [onFontWeight, setonFontWeight] = useState(30);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleFontSizeChange = (onSize) => {
    setSelectedFontSize(onSize);
  };

  const handleFontWeightChange = (onWeight) => {
    setonFontWeight(onWeight);
  };

  return (
    <div>
      <Head />
      <main className="p-5 pl-16">
        <Preview
          text={text}
          color={color}
          size={selectedFontSize}
          thick={onFontWeight}
        />
        <Text onTextChange={handleTextChange} />
        <div className="flex w-full">
          <FontType />
          <FontSize onSize={handleFontSizeChange} />
          <FontColor onColorChange={handleColorChange} />
        </div>
        <div className="flex w-full">
          <FontThickness onFontWeightChange={handleFontWeightChange} />
          <FontBorder />
        </div>
      </main>
    </div>
  );
}

export default App;
