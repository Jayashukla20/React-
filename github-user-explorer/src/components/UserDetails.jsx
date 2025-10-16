import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src={user.avatar_url} alt={user.login} width="150" style={{ borderRadius: "50%" }} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available"}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
        ⬅ Back to Users
      </button>
    </div>
  );
}
