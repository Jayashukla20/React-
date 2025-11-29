import React, { useState } from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passError, setPassError] = useState('');
    const [success, setSuccess] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let hasError = false;

        // Reset previous messages
        setUserError('');
        setPassError('');
        setSuccess('');

        if (username !== 'Jaya') {
            setUserError(' Username not found');
            hasError = true;
        } else if (password !== 'muskan') {
            setPassError(' Invalid password');
            hasError = true;
        }

        if (!hasError) {
            setSuccess(' Login successful!');

            // Call login function from context
            login(username, 'Student');

            setUsername('');
            setPassword('');

            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);

        }
    }


    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {userError && <p className="error">{userError}</p>}

                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passError && <p className="error">{passError}</p>}

                    <button className="btn-login"
                        type="submit"
                        onClick={() => navigate('/dashboard')}
                    >
                        Login
                    </button>

                    <p className="try">
                        <strong>Try:</strong> username: Jaya | password: muskan
                    </p>

                    {success && <p className="success">{success}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login
