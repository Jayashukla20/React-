import React from 'react'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiBriefcase, FiGlobe, FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './styles/profile.css'
const Akshay = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate('/home');
    }
    return (
        <div className='profile-container'>
            <FiUser className='avatar' />
            <h1>Akshay Kadam</h1>
            <p className='bio'>Experienced in React, Node.js, and scalable architectures.</p>

            <div className='info'>
                <p className='info-group'><FiMail className='icons' /> akshay@example.com</p>
                <p className='info-group'><FiCalendar className='icons' />Age: 30</p>
                <p className='info-group'><FiMapPin className='icons' />Pune, India</p>
                <p className='info-group'><FiBriefcase className='icons' />Full Stack Developer @ TechCorp</p>
                <p className='info-group'><FiGlobe className='icons' />johndoe.dev</p>
                <p className='info-group'><FiCalendar className='icons' />Joined: Jan 2020</p>
            </div>
            <button onClick={goBack} className='back-btn'><FiArrowLeft />Back</button>
        </div>
    )
}

export default Akshay