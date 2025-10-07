import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
const GitUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
        console.log(users)
    }, [])
    return (
        <div className='container'>
            {users.map(user => (
                <div key={user.id} className='card'>
                    <img src={user.avatar_url} alt={user.login} />
                    <h3>{user.login}</h3>
                    <a href={user.html_url} target='_blank' rel='noreferrer'>Profile</a>
                </div>
            ))}
        </div>
    )
}

export default GitUsers