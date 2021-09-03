import React, {useState} from 'react'


export default function TextForm(props) {
    
    

    const [text, setText] = useState('Enter text here');
    
    function handleOnChange(e) {
        setText(e.target.value);
    }

    function handleUpClick() {
        setText(text.toUpperCase());
    }

    function handleClearClick() {
        setText('');
    }

    return (
        <>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div>
            <p>{text.split(" ").length} words and {text.length} character</p>
        </div>
        </>
    )
}
