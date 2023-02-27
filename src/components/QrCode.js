import React, { useState, useRef, useEffect } from "react";
import DisplayInput from "./DisplayInput";

const QrCode = (props) => {
  const [inputText, setInputText] = useState("");
  const [qrcodeImage, setQrcodeImage] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = () => {
    setInputText(inputRef.current.value);
  };

  useEffect(() => {
    if (inputText.trim() === "") {
      setQrcodeImage("");
      inputRef.current.value = "";
      return;
    }
    fetch(
      `http://api.qrserver.com/v1/create-qr-code/?data=${inputText}&size=150x150`
    ).then((res) => {
      setQrcodeImage(res?.url);
    });
  }, [inputText]);
  return (
    <div>
      {console.log(inputText)}
      <DisplayInput
        handleInputChange={handleInputChange}
        inputRef={inputRef}
        qrcodeImage={qrcodeImage}
      />
    </div>
  );
};

export default QrCode;
