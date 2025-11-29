import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Gift, Hash, Mail, Phone, User } from 'lucide-react';
import useUser from '../hooks/useUser';
import './profile.css'

const Profile = () => {
  const navigate = useNavigate();
  const { users, loading } = useUser(); // Correct destructuring
  const { id } = useParams();

  console.log('User data:', users);
  console.log('URL param ID:', id);

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (!users || users.length === 0) {
    return <p>No user data available.</p>;
  }

  const selectedUser = users.find(u => String(u.id) === id);
  if (!selectedUser) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <main className="profile-page">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Back to Home
        </button>
        <section className="profile-header">
          <div className="avatar">
            <User size={64} />
          </div>
          <h2>{selectedUser.name}</h2>
        </section>
        <section className="info-grid">
          <div className="info-card">
            <Gift size={20} />
            <p>Role</p>
            <strong>{selectedUser.role}</strong>
          </div>
          <div className="info-card">
            <Hash size={20} />
            <p>User ID</p>
            <strong>{selectedUser.id}</strong>
          </div>
          <div className="info-card">
            <Mail size={20} />
            <p>Email</p>
            <strong>Not provided</strong>
          </div>
          <div className="info-card">
            <Phone size={20} />
            <p>Phone</p>
            <strong>Not provided</strong>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
