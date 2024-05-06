import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" variant="outlined" sx={{ bgcolor: "white" }}>
        <Container maxWidth="lg">
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
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                    alt="logo"
                  />
                </Link>
              </Box>
            </Typography>
            <Link to="/sign-in">
              <Button variant="contained">Увійти</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
