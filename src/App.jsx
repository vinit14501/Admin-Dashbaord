import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Otp from "./pages/Otp";
import Forgot from "./pages/Forgot";
import SignUp from "./pages/SignUp";
import JobBoard from "./pages/JobBoard";
import AnalyticsPage from "./pages/Analytics";
import Financial from "./pages/Financial";
import CardsPage from "./pages/Card";
import IconShowcase from "./pages/Icons";
import AccountSettings from "./components/AccountSettings";
import PasswordSettings from "./components/PasswordSettings";
import ProfileSettings from "./components/ProfileSettings";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<JobBoard />}
        />
        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />
        <Route
          path="/financial"
          element={<Financial />}
        />
        <Route
          path="/cards"
          element={<CardsPage />}
        />
        <Route
          path="/icons"
          element={<IconShowcase />}
        />
        <Route
          path="/account-settings"
          element={<AccountSettings />}
        />
        <Route
          path="/password-settings"
          element={<PasswordSettings />}
        />
        <Route
          path="/profile-settings"
          element={<ProfileSettings />}
        />
        <Route
          path="/login"
          element={<SignIn />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/forgot-password"
          element={<Forgot />}
        />
        <Route
          path="/OTP-Generation"
          element={<Otp />}
        />
      </Routes>
    </BrowserRouter>
  );
};
