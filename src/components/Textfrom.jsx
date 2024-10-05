import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';


export default function Textfrom(props) {
    const [text, setText] = useState("");

    const onChangeHandler = (event) => setText(event.target.value); // Directly set the new value

    const toUpperCase = () => {
        setText(text.toUpperCase())
        props.showAlert('Changed to upperCase', 'success')
    }

    const toLowerCase = () => {
        setText(text.toLowerCase())
        props.showAlert('Changed to lowerCase', 'success')
    }

    const clear = () => {
        setText("")
        props.showAlert('Text Cleared', 'danger')
    }

    const hear = () => {
        var utter = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utter)
    }

    return (
        <>
            <div className="border border-dark p-3 my-3">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.modeDark ? "light" : "dark"} text-${props.modeDark ? "black" : "light"}`} id="exampleFormControlTextarea1" rows="5" value={text} onChange={onChangeHandler} placeholder='Enetr your text for analyzse' />
                </div>
                <button className="btn btn-primary mx-1" onClick={toUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={toLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={hear}><FontAwesomeIcon icon={faVolumeHigh} /></button>
                {/* <button className="btn btn-primary mx-1" onClick={props.toggleMode}>{props.modeBtnText}</button> */}
                <div className="container">
                    <h3>Text Summary</h3>
                    <p>Total character-{text.length}</p>
                    <p>Total Word-{text === "" ? 0 : text.split(' ').length}</p>
                    <p>Total Time Taken-{text === "" ? 0 : (0.008 * text.split(' ').length.toFixed(2))}m</p>
                    <h3>Preview</h3>
                    <p>{text.trim()}</p>
                </div>
            </div> 
        </>
    )
}
