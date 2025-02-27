import { Link } from "react-router-dom";
import { FaSmile, FaRobot, FaUsers, FaExclamationTriangle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* App Name at the top */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Mental Health App</h1>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Mood Tracking */}
        <Link to="/mood-tracking" className="dashboard-icon">
          <FaSmile size={50} />
          <p>Mood Tracking</p>
        </Link>

        {/* AI Friend */}
        <Link to="/ai-friend" className="dashboard-icon">
          <FaRobot size={50} />
          <p>AI Friend</p>
        </Link>

        {/* Communities */}
        <Link to="/groups" className="dashboard-icon">
          <FaUsers size={50} />
          <p>Communities</p>
        </Link>

        {/* Emergency */}
        <Link to="/emergency" className="dashboard-icon">
          <FaExclamationTriangle size={50} />
          <p>Emergency</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;


