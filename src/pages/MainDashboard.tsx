import { Link } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type MainDashboardProps = {
  users: User[];
  onDeleteUser: (id: number) => void;
};

const MainDashboard = ({ users, onDeleteUser }: MainDashboardProps) => {
  return (
    <div>
      <h1>Main Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Role:</strong> {user.role}
            </p>
            <Link to={`/edit/${user.id}`}><button>Edit</button></Link>
            <button onClick={() => onDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainDashboard;
