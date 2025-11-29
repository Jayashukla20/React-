import React from 'react'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiBriefcase, FiGlobe, FiArrowLeft } from 'react-icons/fi'
import './styles/profile.css'
import { useNavigate } from 'react-router-dom'

const Tushar = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate('/home');
    }
    return (
        <div className='profile-container'>
            <FiUser className='avatar' />
            <h1>Tushar Shinde</h1>
            <p className='bio'>Passionate about open-source, React, and mentoring.</p>
            <div className='info'>
                <p className='info-group'><FiMail className='icons'/> tushar@xyz.com</p>
                <p className='info-group'><FiCalendar className='icons'/>Age: 24</p>
                <p className='info-group'><FiMapPin className='icons'/>Nagpur, India</p>
                <p className='info-group'><FiBriefcase className='icons'/>Software Engineer @ MyStartup</p>
                <p className='info-group'><FiGlobe className='icons'/>tushar.codes</p>
                <p className='info-group'><FiCalendar className='icons'/>Joined: Jun 2022</p>
            </div>
            <button onClick={goBack} className='back-btn'><FiArrowLeft />Back</button>
        </div>
    )
}

export default Tushar