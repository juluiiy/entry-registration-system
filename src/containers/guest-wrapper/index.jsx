import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUserStore } from "../../store/user";
import { Box, Container } from "@mui/material";
import { styles } from "../../App/styles";

const GuestWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);



  return (
    <Box sx={styles.auth}>
      <Container component="main" maxWidth="xl" sx={styles.container}>
        {!user ? children : null}
      </Container>
    </Box>
  );
};

export default GuestWrapper;
