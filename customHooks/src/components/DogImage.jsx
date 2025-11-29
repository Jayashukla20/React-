// File: src/components/DogImage.js
import React, { useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch";

const DogImage = () => {
  //  const { data, loading, error } = useFetch("https://dog.ceo/api/breeds/image/random");
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!res.ok) throw new Error("Network error");
        const responseData = await res.json();     // use a local var name
        setDog(responseData.message);              // set state using responseData.message
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, []);

  if (loading) return <p>Loading a cute dog 🐶...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2>🐾 Random Dog Image</h2>
      <img
        src={dog}
        alt="Random Dog"
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          marginTop: "10px"
        }}
      />
    </div>
  );
};

export default DogImage;
