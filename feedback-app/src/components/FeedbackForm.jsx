import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import "./feedback.css"
const FeedbackForm = () => {
    const [entries, setEntries] = useState([])
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        setEntries([...entries, data])
        reset();
        console.log(data)

    };
    console.log(errors)
    const handleDelete = (indexToDelete) => {
        setEntries(entries.filter((_, i) => i !== indexToDelete))
    }

    return (
        <div className='container'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Feedback Collector</h1>

                <div className='field'>
                    <label>Name:</label>
                    <input type='text'
                        name='name'
                        placeholder='Your name'
                        {...register("name", { required: "Name is required" })} />
                </div>
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

                <div className='field'>
                    <label>Feedback:</label>
                    <textarea
                        name='feedback'
                        rows="" cols=""
                        placeholder='Your feedback '
                        {...register("feedback", {
                            required: "Feedback is required",
                            maxLength: { value: 200, message: "Feedback must be less than 200 words" }
                        })} >
                    </textarea>
                </div>
                {errors.feedback && <p style={{ color: 'red' }}>{errors.feedback.message}</p>}

                <button className='btn'>Submit</button>

                <div className='entries'>
                    <h3>Feedback Entries</h3>
                    <ul>
                        {entries.map((entry, index) => (
                            <li key={index}>
                                <div className="feedback-text">
                                    <strong>{entry.name}:</strong> {entry.feedback}
                                </div>
                                <button
                                    className="remove"
                                    type="button"
                                    onClick={() => handleDelete(index)}>
                                    Remove
                                </button>

                            </li>

                        ))}
                    </ul>
                </div>
            </form>

        </div>
    )
}

export default FeedbackForm