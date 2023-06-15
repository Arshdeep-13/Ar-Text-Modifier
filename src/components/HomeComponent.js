import React, { useState } from 'react'
import './dark.css';

export default function Textarea(props) {
    const [text, setText] = useState("");
    const onchanagehandler = (event) => {
        setText(event.target.value);
    }
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "danger");
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "danger");
    }
    const clearText = () => {
        setText("");
        props.showAlert("Text Cleared", "danger");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success")
    }
    const removeExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }
    // const [lightText, darkText] = useState('Enable Dark Mode');
    // const [light, dark] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // })
    // const toggleDark = () => {
    //     if (light.color === 'black') {
    //         dark({
    //             backgroundColor: 'black',
    //             color: 'white',
    //         })
    //         darkText('Enable Light Mode')
    //     }
    //     else {
    //         dark({
    //             backgroundColor: 'white',
    //             color: 'black',
    //         })
    //         darkText('Enable Dark Mode')
    //     }
    // }
    return (
        <>
            <div className={`container2 text-${props.buttonText}`} style={props.mode} >
                {/* <div className="darkContainer darkModeButton">
                    <button className="btn btn-dark" style={light} onClick={toggleDark}>{lightText}</button>
                </div> */}
                <h1>{props.heading}</h1>
                <div className="form-floating my-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={onchanagehandler} style={{ height: "200px" }}></textarea>
                </div>

                <div className="homeButton">
                    <button onClick={toUpperCase} className="btn btn-primary my-2">Convert To UpperCase</button>
                    <button className="btn btn-primary mx-3 my-2" onClick={toLowerCase}>Convert To LowerCase</button>
                    <button className="btn btn-primary mx-3 my-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-danger my-2" onClick={clearText}>Clear</button>
                </div>

                <h2 className={`my-3 text-left text-${props.buttonText}`}>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} letters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>

                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"> Preview </button>
                    <ul className="dropdown-menu">
                        <li><p className='mx-5 my-3'>{text}</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
