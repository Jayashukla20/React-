import React from 'react'
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../App.css"
const Home = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    function handleClick() {
        navigate("/About");
    }
    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
        console.log(users)
    }, [])
    return (
        <div className='home'>
           
            <h3 className='welcome'> Welcome to the GitHub Users Explorer.</h3>
            <button className='fetch-btn' onClick={handleClick}>Fetch GitHub Users</button>
            
        </div>
    )
}

export default Home