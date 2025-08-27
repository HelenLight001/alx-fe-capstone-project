import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://fakerapi.it/api/v1/persons?_quantity=10");
        setUsers(res.data.data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center mt-6">Loading users...</p>;
  if (error) return <p className="text-red-600 text-center mt-6">{error}</p>;

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.email} className="p-4 border rounded-lg shadow">
            <h2 className="font-semibold">{user.firstname} {user.lastname}</h2>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
