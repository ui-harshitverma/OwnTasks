import React, { useState } from "react";
const TextForm = (props) => {
    const handleUpperClick = () => {
        setText(text.toUpperCase());
    };
    const handleLowerClick = () => {
        setText(text.toLowerCase());
    };
    const handleChangeClick = (e) => {
        console.log("changing");
        setText(e.target.value);
    };
    const handleClearClick = () => {
        let length = "";
        setText(length);
    };
    const handleCopyClick = () => {
        let copied = text.select();
        navigator.clipboard.writeText(copied);
    };

    const [text, setText] = useState("Enter the text here");

    return (
        <>
            <div className="container">
                <div className="m-4 text-center text-capitalize">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        {props.title}
                    </label>
                    <textarea
                        className="form-control"
                        rows="8"
                        onChange={handleChangeClick}
                        value={text}
                    ></textarea>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        onClick={handleUpperClick}
                    >
                        Convert to Uppercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        onClick={handleLowerClick}
                    >
                        Convert to Lowercase
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        onClick={handleClearClick}
                    >
                        Clear text
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        onClick={handleCopyClick}
                    >
                        Copy text
                    </button>
                </div>
                <div className="text-center text-capitalize">
                    <h4>Text Summary</h4>
                    <p>
                        {text.split(" ").length} words and {text.length} characters
                    </p>
                </div>
            </div>
        </>
    );
};

export default TextForm;
