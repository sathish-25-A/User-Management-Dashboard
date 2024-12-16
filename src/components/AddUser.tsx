import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type AddUserProps = {
  onAddUser: (user: User) => void;
};

const AddUser = ({ onAddUser }: AddUserProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleAddUser = () => {
    const newUser: User = {
      id: Date.now(), // Use a unique ID for simplicity
      name,
      email,
      role,
    };
    onAddUser(newUser);
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Role:
          <input value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <button onClick={handleAddUser}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
