import React from 'react'
import { useAuth } from '../contexts/Auth'
import { Navigate } from 'react-router-dom'
import '../styles/dashboard.css' // ✅ Add this import

const Dashboard = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='dashboard'>
            <h1>Welcome Back, {user.username}! 🎉</h1>
            <p>
                You are now logged in. This page is <strong>protected</strong> and 
                only accessible to authenticated users.
            </p>

            <div className='card'>
                <h2>Profile Summary</h2>
                <div className='profile-info'>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Status:</strong> {user.status}</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
