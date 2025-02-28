import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CommunityGroups from "../pages/CommunityGroups";
import GroupChat from "../pages/GroupChat";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/community" element={<ProtectedRoute><CommunityGroups /></ProtectedRoute>} />
        <Route path="/group/:groupId" element={<ProtectedRoute><GroupChat /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
