import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Container } from "@mui/material";

import { useUserStore } from "../../store/user";
import Header from "../header";
import { styles } from "../../App/styles";
import Footer from "../footer";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user, accessToken } = useUserStore();

  useEffect(() => {
    if (!accessToken) {
      navigate("/sign-in");
    }
  }, [accessToken, navigate]);

  return (
    <>
      <Header />
      <Box sx={styles.innerBox}>
        <Container component="main" maxWidth="xl" sx={styles.container}>
          {user ? (
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
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AuthWrapper;
