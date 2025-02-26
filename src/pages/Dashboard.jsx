import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaCog, FaSearch, FaUser, FaCalendarAlt, FaBook, FaBell, FaExclamationTriangle } from "react-icons/fa";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Mental Wellness Hub</h1>

      {/* Navigation Icons */}
      <div className="flex space-x-4 mt-4 border p-4 rounded-lg shadow-md">
        <FaCog className="text-gray-600 text-2xl" />
        <FaSearch className="text-gray-600 text-2xl" />
        <FaUser className="text-gray-600 text-2xl" />
        <FaCalendarAlt className="text-gray-600 text-2xl" />
        <FaBook className="text-gray-600 text-2xl" />
        <FaBell className="text-gray-600 text-2xl" />
        <FaExclamationTriangle className="text-red-600 text-2xl" />
      </div>

      {/* Mood Tracking Placeholder */}
      <div className="mt-6 p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Mood Tracking</h2>
        <p className="text-gray-500">Coming soon...</p>
      </div>

      {/* User Info & Logout */}
      <div className="mt-6">
        <p className="text-gray-700">
          Logged in as: <span className="font-semibold">{user?.email}</span>
        </p>
        <button
          onClick={logout}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

