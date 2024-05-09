import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";

const GuestWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return !user ? children : null;
};

export default GuestWrapper;
