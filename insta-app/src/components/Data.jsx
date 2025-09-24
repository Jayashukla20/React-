import React from 'react'
import { useState } from 'react'
const Data = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <img id={props.id} src={props.imgsrc}></img>
            <p>{props.text}</p>
            <button id='btn' onClick={() => setCount(count+1)}>❤️ Like({count})</button>
        </div>
    )
}

export default Data