import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase","success");
  };

  const handleLoClick = () => {
    console.log("lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","success");
  };

  const ClearText = () => {
    console.log("Text cleared was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("All text was cleared","success");
  };

  const handleOnChange = (event) => {
    console.log("text area clicked");
    setText(event.target.value);

  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","success");
  };

  const ExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All text was cleared","success");

  };

  return (
    <>
      <div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1 className="text"> {props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="8"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter Text Here"
              id="myBox"
              style={{
                backgroundColor: props.mode === "dark" ? "rgb(0, 0, 30)" : "white",
                color: props.mode === "dark" ? "white" : "black",
               
            
              
              }}
            ></textarea>
          </div>
            
         <div className="container d-flex justify-content-center">
          <div className="row">
            <button className="btn btn-primary mx-1 col-lg-2 col-12 my-1" onClick={handleUpClick}>
              Convert to Uppercase
            </button>

            <button className="btn btn-primary mx-1 col-lg-2 col-12 my-1" onClick={handleLoClick}>
              Convert to Lowercase
            </button>

            <button className="btn btn-success mx-1 col-lg-2 col-12 my-1" onClick={ClearText}>
              Clear Text
            </button>
            <button className="btn btn-success mx-1 col-lg-2 col-12 my-1" onClick={handleCopy}>
              Copy to Clipboard
            </button>
            <button className="btn btn-danger mx-1 col-lg-2 col-12 my-1" onClick={ExtraSpaces}>
              Remove Extra spaces
            </button>
          </div>
          
          </div>
         </div>
        </div>
      
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <div className="container my-3 d-flex justify-content-center"
        >
          <p>
            {text.split(" ").length} words,{text.length} characters,
          </p>
          <p>{0.008 * text.split(" ").length} Mintues Taken to Read</p>
        </div>
      </div>
    </>
  );
}
