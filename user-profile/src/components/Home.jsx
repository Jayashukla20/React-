import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import './styles/home.css'

const Home = () => {
    const navigate = useNavigate();

    function goToAkshay() {
        navigate('/akshay');
    }

    function goToPriya() {
        navigate('/priya');
    }
    function goToTushar() {
        navigate('/tushar');
    }


    return (
        <div className='user-directory'>
            <h1>User Directory</h1>
            <div className='user-list'>
                <button onClick={goToAkshay} className='username'><FiUser />Akshay Kadam</button>
                <button onClick={goToPriya} className='username'><FiUser />Priya Sharma</button>
                <button onClick={goToTushar} className='username'><FiUser />Tushar Shinde</button>

            </div>

        </div>
    )
}

export default Home