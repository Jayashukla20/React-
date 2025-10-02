import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        termsAccepted: false
    })
    const [errors, setErrors] = useState({})
    const [successMessage, setSucessMessage] = useState("")

    function handleChange(event) {
        const { name, type, value, checked } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newErrors = validateForm(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert("Registration successful ✅");
            console.log(formData);
            setSucessMessage(`Welcome, ${formData.username}!`);
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                age: "",
                gender: "",
                termsAccepted: false
            });
            setErrors({});
        }
    }

    function validateForm(data) {
        let errors = {};
        if (!data.username) errors.username = "Username is required";
        if (!data.email.includes("@")) errors.email = "Invalid email";
        if (data.password.length < 6) errors.password = "Password must be at least 6 characters";
        if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords do not match";
        if (!data.age || data.age < 18) errors.age = "Must be 18 or older";
        if (!data.gender) errors.gender = "Please select a gender";
        if (!data.termsAccepted) errors.termsAccepted = "You must accept the terms";
        return errors;
    }

    return (
        <div>
            <h1>Registration Form in React</h1>
            <h4>Please fill in the details below to create your account</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
                    <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
                    <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} /> Other
                    {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        /> I accept Terms & Conditions
                    </label>
                    {errors.termsAccepted && <p style={{ color: "red" }}>{errors.termsAccepted}</p>}
                </div>
                <button type="submit">Register</button>
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            </form>
        </div>
    )
}

export default Form
