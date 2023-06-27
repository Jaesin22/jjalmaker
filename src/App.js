import React, { useState } from "react";
import Head from "./components/Head";
import FontType from "./components/FontType";
import Text from "./components/Text";
import FontSize from "./components/FontSize";
import FontColor from "./components/FontColor";
// import FontThickness from "./components/FontThickness";
// import FontBorder from "./components/FontBorder";
import Preview from "./Func/Preview";
import { Space, Divider } from "antd";
import BackgroundColor from "./components/BackgroundColor";
import DownloadButton from "./components/DownloadButton";
import { CanvasProvider } from "./Func/CanvasContext";
import Upload from "./components/Upload";

function App() {
  const [text, setText] = useState("Sample Text");
  const [color, setColor] = useState("#FFFFFF");
  const [selectedFontSize, setSelectedFontSize] = useState(60);
  // const [onFontWeight, setonFontWeight] = useState(30);
  // const [onFontBorder, setonFontBorder] = useState("transparent");
  const onFontWeight = 30;
  const onFontBorder = "transparent";
  const [onFontType, setonFontType] = useState("SANJUGotgam");
  const [bgcolor, setBgColor] = useState("#E9B1BE");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleBgColorChange = (selectBgColor) => {
    setBgColor(selectBgColor);
  };

  const handleFontSizeChange = (onSize) => {
    setSelectedFontSize(onSize);
  };

  // const handleFontWeightChange = (onWeight) => {
  //   setonFontWeight(onWeight);
  // };

  // const handleFontBorderChange = (onBorder) => {
  //   setonFontBorder(onBorder);
  // };

  const handleFontTypeChange = (onType) => {
    setonFontType(onType);
  };

  return (
    <section className="bg-[#222933] flex flex-col items-center justify-center min-h-screen">
      <header className="mt-4">
        <Head />
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
        <Space>
          <FontColor onColorChange={handleColorChange} />
          <FontType onFontTypeChange={handleFontTypeChange} />
          <FontSize onSize={handleFontSizeChange} />
          <Divider type="vertical" className="bg-white" />
          <BackgroundColor onBgColorChange={handleBgColorChange} />
          <Upload />
        </Space>
        <CanvasProvider>
          <Preview
            text={text}
            color={color}
            size={selectedFontSize}
            thick={onFontWeight}
            border={onFontBorder}
            fontFamiliy={onFontType}
            bgColor={bgcolor}
          />
          <Text onTextChange={handleTextChange} />
          <DownloadButton />
        </CanvasProvider>
        {/* <div className="flex w-full">
          <FontThickness onFontWeightChange={handleFontWeightChange} />
          <FontBorder onFontBorderChange={handleFontBorderChange} />
        </div> */}
      </main>
    </section>
  );
}

export default App;
