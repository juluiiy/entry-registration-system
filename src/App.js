import { Box, Container, CssBaseline } from "@mui/material";
import SignUpForm from "./containers/forms/sign-up";
import { ProfileProvider } from "./context/user-provider";
import { ApplicationsProvider } from "./context/applications-provider";

const App = () => {
  return (
    <ProfileProvider>
      <ApplicationsProvider>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh", py: "20px" }}>
          <Container maxWidth="lg">
            <SignUpForm />
          </Container>
        </Box>
      </ApplicationsProvider>
    </ProfileProvider>
  );
};

export default App;
