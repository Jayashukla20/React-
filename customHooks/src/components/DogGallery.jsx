// File: src/components/DogGallery.js
import React, { useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch";
const DogGallery = () => {
  // const { data, loading, error } = useFetch("https://dog.ceo/api/breeds/image/random/6");
  const [dogs, setDogs] = useState([]);          // array of image URLs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
        if (!res.ok) throw new Error("Network error");
        const responseData = await res.json();   // name it responseData
        setDogs(responseData.message);           // message is the array of URLs
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) return <p>Loading dogs gallery 🐕🐕🐕...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🐶 Dog Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          marginTop: "20px",
          padding: "0 30px"
        }}
      >
        {dogs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Dog ${index + 1}`}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
