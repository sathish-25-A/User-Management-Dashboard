import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainDashboard from "../pages/MainDashboard";
import EditUser from "../pages/EditUser";
import AddUser from "../components/AddUser";
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
    { id: 3, name: "Alice Brown", email: "alice.brown@example.com", role: "User" },
  ]);

  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = () => {
    // Toggle sortOrder
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    // Sort the users array
    setUsers((prevUsers) =>
      [...prevUsers].sort((a, b) =>
        newSortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    );
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
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
        <Route path="/edit/:userId" element={<EditUser users={users} />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </Router>
  );
};

export default App;
