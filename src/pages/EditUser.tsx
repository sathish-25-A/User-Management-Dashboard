import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type EditUserProps = {
  users: User[];
  onUpdateUser: (updatedUser: User) => void;
};

const EditUser = ({ users, onUpdateUser }: EditUserProps) => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  // Find the user to edit
  const userToEdit = users.find((user) => user.id === Number(userId));
  if (!userToEdit) {
    return <div>User not found</div>;
  }

  const [name, setName] = useState(userToEdit.name);
  const [email, setEmail] = useState(userToEdit.email);
  const [role, setRole] = useState(userToEdit.role);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser: User = { ...userToEdit, name, email, role };
    onUpdateUser(updatedUser);
    navigate('/'); // Redirect to the home page after update
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
