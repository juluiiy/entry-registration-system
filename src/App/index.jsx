import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";

import { useUserStore } from "../store/user";
import { userService } from "../services/user";
import { routes } from "../constants/routes";
import { getUserIdFromToken } from "../helpers";
import { styles } from "./styles";

const App = () => {
  const { accessToken, setUser } = useUserStore();

  useEffect(() => {
    if (accessToken) {
      const userId = getUserIdFromToken(accessToken);
      userService.getUserById(userId).then((data) => setUser(data));
    }
  }, [accessToken, setUser]);

  const pages = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  return (
    <>
      <CssBaseline />
      <Box sx={styles.box}>
        <Routes>{pages}</Routes>
      </Box>
      <Toaster />
    </>
  );
};

export default App;
