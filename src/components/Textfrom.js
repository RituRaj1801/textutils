import React, { useState } from 'react'



export default function Textfrom(props) {
    const [text,setText]=useState("");
    const onChangeHandler = (event) => {
        setText(event.target.value); // Directly set the new value
    }
    const toUpperCase=()=>{
        var newtext=text.toUpperCase()
        setText(newtext)
    }
    return (
        <>
        <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={onChangeHandler} placeholder='Enetr your text for analyzse'  />
            </div>
            <button className="btn btn-primary" onClick={toUpperCase}>Convert to UpperCase</button>
        </>
    )
}
