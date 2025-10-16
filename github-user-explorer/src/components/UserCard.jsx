import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css"

const UserCard = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            fetch(`https://api.github.com/users/${username}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return res.json();
                })
                .then((data) => setUser(data))
                .catch((error) => console.log(error));
        }
    }, [username]);

    if (!user) {
        return <div>User data not found.</div>;
    }

    function handleClick() {
        navigate(-1);
    }

    return (
        <div className="user-wrapper">
            <button className="back-btn" onClick={handleClick}>Go Back</button>

            <div className="user-card">
                <img src={user.avatar_url} alt={user.login} className="avatar" />
                <h1>{user.name}</h1>
                <p><strong>Username:</strong> {user.login}</p>
                <p><strong>Followers:</strong> {user.followers}</p>
                <p><strong>Following:</strong> {user.following}</p>
                <p><strong>Public Repos:</strong> {user.public_repos}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
                <a href={user.html_url} target="_blank" rel="noreferrer" className="profile-link">
                    View Profile on GitHub
                </a>
            </div>
        </div>
    );
};

export default UserCard;
