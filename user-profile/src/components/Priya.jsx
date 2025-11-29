import React from 'react'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiBriefcase, FiGlobe, FiArrowLeft } from 'react-icons/fi'
import './styles/profile.css'
import { useNavigate } from 'react-router-dom'
const Priya = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate('/home');
    }
    return (
        <div className='profile-container'>
            <FiUser className='avatar'/>
            <h1>Priya Sharma</h1>
            <p className='bio'>Specializes in UI/UX, animations, and responsive design.</p>

            <div className='info'>
                <p className='info-group'><FiMail className='icons'/> priya@domain.com</p>
                <p className='info-group'><FiCalendar className='icons'/>Age: 26</p>
                <p className='info-group'><FiMapPin className='icons'/>Mumbai, India</p>
                <p className='info-group'><FiBriefcase className='icons'/>Frontend Developer @ DesignPro</p>
                <p className='info-group'><FiGlobe className='icons'/>priyasharma.com</p>
                <p className='info-group'><FiCalendar className='icons'/>Joined: Mar 2021</p>
            </div>
            <button onClick={goBack} className='back-btn'><FiArrowLeft />Back</button>
        </div>
    )
}

export default Priya