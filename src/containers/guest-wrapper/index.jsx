import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GuestWrapper = ({ user, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return !user ? children : null;
};

export default GuestWrapper;
