import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Tushar Shinde", role: "Designer" },
        { id: 2, name: "Priya Singh", role: "Developer" },
        { id: 3, name: "Aryan Mehta", role: "Product Manager" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
