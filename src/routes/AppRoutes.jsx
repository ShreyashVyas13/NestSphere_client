import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/lending/LandingPage";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Members from "../pages/members/Members";
import Flats from "../pages/flats/Flats";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/members"
        element={
          <ProtectedRoute>
            <Members />
          </ProtectedRoute>
        }
      />

      <Route
        path="/flats"
        element={
          <ProtectedRoute>
            <Flats />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
