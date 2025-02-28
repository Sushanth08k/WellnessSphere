import { Link } from "react-router-dom";
import { FaSmile, FaRobot, FaUsers, FaExclamationTriangle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* App Name at the top */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-8">Mental Health App</h1>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Mood Tracking */}
        <Link to="/mood-tracking" className="dashboard-icon flex flex-col items-center p-4 rounded-lg hover:bg-indigo-100 transition">
          <FaSmile size={50} className="text-indigo-500 hover:text-indigo-700 transition duration-200" />
          <p className="mt-2 text-gray-700 text-lg font-semibold">Mood Tracking</p>
        </Link>

        {/* AI Friend */}
        <Link to="/ai-friend" className="dashboard-icon flex flex-col items-center p-4 rounded-lg hover:bg-blue-100 transition">
          <FaRobot size={50} className="text-blue-500 hover:text-blue-700 transition duration-200" />
          <p className="mt-2 text-gray-700 text-lg font-semibold">AI Friend</p>
        </Link>

        {/* Communities */}
        <Link to="/community" className="dashboard-icon flex flex-col items-center p-4 rounded-lg hover:bg-green-100 transition">
          <FaUsers size={50} className="text-green-500 hover:text-green-700 transition duration-200" />
          <p className="mt-2 text-gray-700 text-lg font-semibold">Communities</p>
        </Link>

        {/* Emergency */}
        <Link to="/emergency" className="dashboard-icon flex flex-col items-center p-4 rounded-lg hover:bg-red-100 transition">
          <FaExclamationTriangle size={50} className="text-red-500 hover:text-red-700 transition duration-200" />
          <p className="mt-2 text-gray-700 text-lg font-semibold">Emergency</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;




