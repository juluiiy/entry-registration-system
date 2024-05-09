import { Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import SignUpPage from "../pages/sign-up";
import SignInPage from "../pages/sign-in";
import Home from "../pages/home";
import Header from "../containers/header";
import Footer from "../containers/footer";
import CreateApplication from "../pages/create-application";
import { Toaster } from "react-hot-toast";
import GuestWrapper from "../containers/guest-wrapper";
import AuthWrapper from "../containers/auth-wrapper";

import { styles } from "./styles";

const App = () => {
  //TODO Replace with actual user state
  const user = true;
  return (
    <>
      <CssBaseline />
      <Box sx={styles.box}>
        <Header />
        <Box sx={styles.innerBox}>
          <Container maxWidth="xl" sx={styles.container}>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthWrapper user={user}>
                    <Home />
                  </AuthWrapper>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <GuestWrapper user={user}>
                    <SignUpPage />
                  </GuestWrapper>
                }
              />
              <Route
                path="/sign-in"
                element={
                  <GuestWrapper user={user}>
                    <SignInPage />
                  </GuestWrapper>
                }
              />
              <Route
                path="/create-application"
                element={
                  <AuthWrapper user={user}>
                    <CreateApplication />
                  </AuthWrapper>
                }
              />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
      <Toaster />
    </>
  );
};
export default App;
