import React from 'react'
import { User, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import '../components/useCard.css';

const UserCard = ({ id, name, role }) => {
    
    return (
        <div className="user-card">

            <User size={56} strokeWidth={1.5} className="user-icon" />

            <h3>{name}</h3>

            <div className="role-row">
                <Briefcase size={16} strokeWidth={1.5} />
                <p>{role}</p>
            </div>

            <Link to={`/profile/${id}`}>
                <button className="view-btn">
                    View Profile
                    <ArrowRight size={16} strokeWidth={2} className="arrow-icon" />
                </button>
            </Link>
        </div>
        )
}

export default UserCard