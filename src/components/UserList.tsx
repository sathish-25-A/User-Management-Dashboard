// components/UserList.tsx

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type UserListProps = {
  users: User[];
  onDeleteUser: (id: number) => void;
};

const UserList = ({ users, onDeleteUser }: UserListProps) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} - {user.email} - {user.role}</span>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
