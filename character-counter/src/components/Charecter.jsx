import React from 'react'
import { useState } from 'react'


const Charecter = () => {
    const [count, setCount] = useState(0);

    const handleChange = (event) => {
        setCount(event.target.value.length);
    }
    return (
        <div>
            <h1>Character Counter</h1>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder='Start Typing......'
                onChange={handleChange}>
                    

            </textarea>
            <h2>Character Count: {count}</h2>
        </div>
    )
}

export default Charecter