import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});

    function handleClick(user) {
        navigate(`/viewUsers/${user.login}`);
    }

    useEffect(() => {
        fetch(`https://api.github.com/users`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            }
            )
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }



    return (
        <div>
            <h1 className='users'>GitHub Users</h1>
            <ul className='user-list'>
                {data.map((user) => (
                    <li key={user.id} className='user-item'>
                        <div className="user-left">
                            <img src={user.avatar_url} alt={user.login} width="50" height="50" />
                            <p className='login'>{user.login}</p>
                        </div>
                        <button className='view' onClick={() => handleClick(user)}>View Details</button>
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default About