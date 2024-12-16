import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import EditUser from "./pages/EditUser";
import AddUser from "./components/AddUser";
import "./styles/styles.css";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
  ]);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleUpdateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  const handleAddUser = (newUser: { name: string; email: string; role: string }) => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers((prevUsers) => [...prevUsers, newUserWithId]);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleSort = () => {
    const sortedUsers = [...users].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setUsers(sortedUsers);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add User</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <MainDashboard
              users={users}
              onDeleteUser={handleDeleteUser}
              onSort={handleSort}
              sortOrder={sortOrder}
            />
          }
        />
        <Route
          path="/edit/:userId"
          element={<EditUser users={users} onUpdateUser={handleUpdateUser} />}
        />
        <Route path="/add" element={<AddUser onAddUser={handleAddUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
