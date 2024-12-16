type User = {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  
  type UserTableProps = {
    data: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
  };
  
  const UserTable = ({ data, onEdit, onDelete }: UserTableProps) => {
    return (
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn-edit" onClick={() => onEdit(user)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => onDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserTable;
  