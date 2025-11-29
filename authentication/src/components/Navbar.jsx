import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    function handleLogout() {
        logout();
        navigate("/Login");
    }
    return (
        <div className='nav'>
            <div className='logo'>
                <h3>AuthSim</h3>
            </div>
            <div className='btns'>
                <button className='home-btn' onClick={() => navigate('/home')}>
                    Home
                </button>

                {user ? (
                    <>
                        <button className='dashboard-btn' onClick={() => navigate('/dashboard')}>
                            Dashboard
                        </button>
                        <button className='logout-btn' onClick={handleLogout}>
                            Logout
                        </button>
                        <span className='username'>👋 {user.username}</span>
                    </>
                ) : (
                    <button className='login-btn' onClick={() => navigate('/login')}>
                        Login
                    </button>
                )}


            </div>
        </div>
    )
}

export default Navbar