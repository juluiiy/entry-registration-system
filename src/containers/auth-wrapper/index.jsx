import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default AuthWrapper;
