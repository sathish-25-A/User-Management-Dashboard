import { useState } from "react";

type UserFormProps = {
    onSubmit: (user: { id?: number; name: string; email: string; role: string }) => void; // 'id' is now optional
    defaultValues?: { id?: number; name: string; email: string; role: string }; // 'id' is optional for editing
  };
  
  const UserForm = ({ onSubmit, defaultValues }: UserFormProps) => {
    const [name, setName] = useState(defaultValues?.name || "");
    const [email, setEmail] = useState(defaultValues?.email || "");
    const [role, setRole] = useState(defaultValues?.role || "");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ id: defaultValues?.id, name, email, role }); // Include id for editing
      setName("");
      setEmail("");
      setRole("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  

export default UserForm;
