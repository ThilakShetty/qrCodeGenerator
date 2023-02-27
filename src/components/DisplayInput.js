import React, { useRef } from "react";
import "./Display.css";

const DisplayInput = (props) => {
  const { handleInputChange, inputRef, qrcodeImage } = props;

  return (
    <div className="DisplayInput">
      <input type="text" ref={inputRef} className="inputBox" />
      {qrcodeImage && <img src={qrcodeImage} alt="qrcode" className="qrcode" />}
      <button onClick={handleInputChange} className="submitButton">
        Generate QR Code
      </button>
    </div>
  );
};

export default DisplayInput;
