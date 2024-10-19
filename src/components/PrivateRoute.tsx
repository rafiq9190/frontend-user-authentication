// src/components/PrivateRoute.tsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { LuLoader2 } from "react-icons/lu";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, login } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token && !user) {
        try {
          jwtDecode(token);
          login(token); // Log in the user with the stored token
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          console.error("Invalid token in storage");
          localStorage.removeItem("token"); // Remove invalid token
        }
      }
      setLoading(false); // Set loading to false once the check is complete
    };

    checkToken();
  }, [user, login]);
  if (loading) {
    // Optionally, show a loading spinner or placeholder while checking token
    return (
      <div>
        <LuLoader2 className="animate-spin h-10 w-10 mr-3 bg-dark dark:bg-white ..." />
      </div>
    );
  }
  if (!user) {
    // User is not authenticated, redirect to login
    console.log("tesstststt");
    return <Navigate to="/login" />;
  }

  // User is authenticated, allow access to the route
  return <>{children}</>;
};

export default PrivateRoute;
