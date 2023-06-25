import React, { useState } from "react";
import { FontColorsOutlined } from "@ant-design/icons";
import { ChromePicker } from "react-color";

const FontColor = ({ onColorChange }) => {
  const [color, setColor] = useState("#ff0000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorIconClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (e) => {
    setColor(e.hex);
    onColorChange(e.hex);
  };

  const handleClose = () => {
    setShowColorPicker(false);
  };

  return (
    <>
      <FontColorsOutlined
        onClick={handleColorIconClick}
        className="flex items-center justify-center cursor-pointer mx-1"
        style={{
          color: color,
          backgroundColor: "#ffffff",
          fontSize: "30px",
          border: "1px solid #000000",
          borderRadius: "3px",
        }}
      />
      {showColorPicker && (
        <div className="absolute mx-1">
          <div
            style={{
              position: "fixed",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
            }}
            onClick={handleClose}
          />
          <ChromePicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </>
  );
};

export default FontColor;
