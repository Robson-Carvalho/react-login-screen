import { useContext } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";

import { AuthProvider, AuthContext } from "./contexts/auth.jsx";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
