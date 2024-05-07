import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import { ProfileProvider } from "./context/user-provider";
import { ApplicationsProvider } from "./context/applications-provider";

import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";
import Home from "./pages/home";
import Header from "./containers/header";
import Footer from "./containers/footer";
import CreateApplication from "./pages/create-application";
import { useUserStore } from "./store/user";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  const logout = useUserStore((state) => state.logout);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <Router>
      <ProfileProvider>
        <CssBaseline />
        <ApplicationsProvider>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            minHeight="100vh"
          >
            <Header />
            <Box sx={{ flexGrow: 1, bgcolor: "#f7f7f7", pt: "100px" }}>
              <Container
                maxWidth="xl"
                sx={{
                  bgcolor: "white",
                  py: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                  <Route path="/sign-in" element={<SignInPage />} />
                  <Route
                    path="/create-application"
                    element={<CreateApplication />}
                  />
                </Routes>
              </Container>
            </Box>
            <Footer />
          </Box>
        </ApplicationsProvider>
      </ProfileProvider>
      <Toaster />
    </Router>
  );
};
export default App;
