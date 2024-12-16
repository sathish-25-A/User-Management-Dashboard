import { useParams } from "react-router-dom";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type EditUserProps = {
  users: User[];
};

const EditUser = ({ users }: EditUserProps) => {
  const { userId } = useParams<{ userId: string }>();
  const user = users.find((u) => u.id === Number(userId));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");

  const handleSave = () => {
    console.log("Updated User:", { id: user?.id, name, email, role });
    // Update logic goes here
  };

  if (!user) return <div>User not found!</div>;

  return (
    <div>
      <h1>Edit User</h1>
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
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default EditUser;
