import React from "react";
import useUser from "../hooks/useUser";
import UserCard from "../components/UserCard";
import './home.css'

const Home = () => {
 
  const { users, loading } = useUser();

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="user-list">
      {users.map(u=> (
        <UserCard
          key={u.id}
          name={u.name}
          role={u.role}
          id={u.id}
        />
      ))}
    </div>
  );
};

export default Home;
