import { Box, Button, Container, CssBaseline } from "@mui/material";
import SignInForm from "./containers/forms/sign-in";
import SignUpForm from "./containers/forms/sign-up";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", py: "20px" }}>
        <Container maxWidth="lg">
          <SignUpForm />
        </Container>
      </Box>
    </>
  );
};

export default App;
