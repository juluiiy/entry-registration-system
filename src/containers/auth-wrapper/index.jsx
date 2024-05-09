import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { CircularProgress } from "@mui/material"; // Import a spinner component

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user, accessToken } = useUserStore();

  useEffect(() => {
    if (!accessToken) {
      navigate("/sign-in");
    }
  }, [accessToken, navigate]);

  return user ? (
    children
  ) : (
    <CircularProgress
      size={60}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
      }}
    />
  );
};

export default AuthWrapper;
