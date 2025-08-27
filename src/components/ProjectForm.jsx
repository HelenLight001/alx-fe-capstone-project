import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    const data = { title, assignedTo, description, startDate, endDate };
    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "https://fakerapi.it/api/v1/persons?_quantity=12",
        data,
        { headers }
      );

      setSuccessMsg("Task Registered successfully!");
      setTitle("");
      setAssignedTo("");
      setDescription("");
      setStartDate("");
      setEndDate("");

      localStorage.setItem("userId", response.data._id);
      navigate("/allprojects");
    } catch (error) {
      setErrorMsg(error?.response?.data?.message || "Failed to add task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
          Project Manager
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Assigned To */}
          <div>
            <input
              type="text"
              placeholder="Assigned To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
            />
          </div>

          {/* Dates in grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Messages */}
          {successMsg && (
            <p className="text-green-600 text-center font-medium">
              {successMsg}
            </p>
          )}
          {errorMsg && (
            <p className="text-red-600 text-center font-medium">{errorMsg}</p>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
            <Link
              to="/allprojects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition"
            >
              View All Projects
            </Link>

            {/* 👇 New Users button */}
            <Link
              to="/users"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-blue-400 text-white hover:bg-blue-600 transition"
            >
              Users
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-60 transition"
            >
              {loading ? "Loading..." : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
