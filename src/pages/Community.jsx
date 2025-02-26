import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Community Support</h1>
      <p className="text-gray-600">Join a support group and connect with others.</p>

      <div className="mt-4">
        <Link
          to="/community/anxiety"
          className="block p-4 border rounded-lg shadow hover:bg-gray-100"
        >
          Anxiety Support Group
        </Link>
        <Link
          to="/community/depression"
          className="block p-4 border rounded-lg shadow hover:bg-gray-100 mt-2"
        >
          Depression Support Group
        </Link>
      </div>
    </div>
  );
};

export default Community;
