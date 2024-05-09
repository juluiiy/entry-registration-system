import AuthWrapper from "../containers/auth-wrapper";
import GuestWrapper from "../containers/guest-wrapper";

import SignUpPage from "../pages/sign-up";
import SignInPage from "../pages/sign-in";
import CreateApplication from "../pages/create-application";
import Home from "../pages/home";

export const routes = [
  {
    path: "/",
    element: (
      <AuthWrapper>
        <Home />
      </AuthWrapper>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <GuestWrapper>
        <SignUpPage />
      </GuestWrapper>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <GuestWrapper>
        <SignInPage />
      </GuestWrapper>
    ),
  },
  {
    path: "/create-application",
    element: (
      <AuthWrapper>
        <CreateApplication />
      </AuthWrapper>
    ),
  },
];
