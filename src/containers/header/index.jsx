import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

import { useUserStore } from "../../store/user";

const Header = () => {
  const { user, logout } = useUserStore();

  const logoutButton = user && (
    <Button variant="contained" onClick={logout}>
      Вийти
    </Button>
  );

  return (
    <AppBar position="fixed" variant="outlined" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div">
            <Box sx={{ width: 40, height: 40 }}>
              <Link to="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IbAh2H0Vdmumdzxru9EaOJ3N8oRwOT7kwmQGDGhz9A&s"
                  alt="logo"
                />
              </Link>
            </Box>
          </Typography>
          {logoutButton}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
