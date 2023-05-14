import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Set up the MongoDB database and create a collection named "users" to store user data.


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async () => {
    try {
      const response = await axios.post('/users', { name, email, password });
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Create User</button>
      </form>

      <h2>Existing Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
