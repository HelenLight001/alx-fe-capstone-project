import { useEffect, useState } from "react";

export default function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Example: Fetch user from localStorage or API
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>No user details found. Please log in.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
          User Profile
        </h1>

        <div className="space-y-4">
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Role:</span> {user.role || "Member"}</p>
          <p><span className="font-semibold">Joined:</span> {user.joined || "N/A"}</p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("userData");
            window.location.href = "/login";
          }}
          className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
