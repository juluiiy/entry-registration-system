import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import { ProfileProvider } from "./context/user-provider";
import { ApplicationsProvider } from "./context/applications-provider";

import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";
import Home from "./pages/home";
import Header from "./containers/header";
import Footer from "./containers/footer";

const App = () => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <ProfileProvider>
        <ApplicationsProvider>
          <Router>
            <Header />
            <CssBaseline />
            <Box sx={{ flexGrow: 1, bgcolor: "#f7f7f7", pt: "64px" }}>
              <Container
                maxWidth="lg"
                sx={{
                  bgcolor: "white",
                  py: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                  <Route path="/sign-in" element={<SignInPage />} />
                </Routes>
              </Container>
            </Box>
            <Footer />
          </Router>
        </ApplicationsProvider>
      </ProfileProvider>
    </Box>
  );
};
export default App;
