import { Route, Routes } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import Header from "../containers/header";
import Footer from "../containers/footer";
import { Toaster } from "react-hot-toast";

import { styles } from "./styles";
import { routes } from "../constants/routes";
import { useUserStore } from "../store/user";
import { useEffect } from "react";

const App = () => {
  const { accessToken, setUser } = useUserStore();

  useEffect(() => {
    if (accessToken) {
      setTimeout(() => {
        setUser({
          id: "f6bd7503-635b-4f77-a186-7a64a5a30d22",
          username: "Julia",
          password:
            "$2a$10$jUIU6i.06GR/LGWZq7/ci./ZEFL6nkhzQe0WWTjmOK6yg3ngfCG6u",
          email: "example@email.com",
          phoneNumber: "+380986606073",
          avatar: null,
          nmtResults: [
            {
              id: "4c0b28b4-fd5a-468f-95b4-2ad82b629efd",
              name: "Математика",
              value: 192,
            },
            {
              id: "77272987-acf1-4228-b262-8539a1efd5c0",
              name: "Українська мова",
              value: 163,
            },
            {
              id: "693333b1-50a9-4fb6-89f2-d45955559a33",
              name: "Історія України",
              value: 150,
            },
            {
              id: "a6a0b037-16bf-48d5-ab76-715dab5e3f2c",
              name: "Англійська мова",
              value: 196,
            },
          ],
          applications: [],
        });
      }, 2000);
    }
  }, [accessToken, setUser]);

  const pages = routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  return (
    <>
      <CssBaseline />
      <Box sx={styles.box}>
        <Header />
        <Box sx={styles.innerBox}>
          <Container maxWidth="xl" sx={styles.container}>
            <Routes>{pages}</Routes>
          </Container>
        </Box>
        <Footer />
      </Box>
      <Toaster />
    </>
  );
};

export default App;
