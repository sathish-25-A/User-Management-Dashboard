import { useState } from 'react';

type AddUserProps = {
  onAddUser: (newUser: { name: string; email: string; role: string }) => void;
};

const AddUser = ({ onAddUser }: AddUserProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form
  const validateForm = () => {
    if (name && email && role) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Handle form input changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    validateForm();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
    validateForm();
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onAddUser({ name, email, role });
      setName('');
      setEmail('');
      setRole('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={handleRoleChange}
            placeholder="Enter role"
            required
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
