import { useState, useMemo } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  InputAdornment,
  Paper,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Apple as AppleIcon,
  Visibility,
  VisibilityOff,
  Login as LoginIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 8px 40px rgba(0, 0, 0, 0.12)",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5),
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#6C63FF",
          },
          background: {
            default: "#F4F6F8",
            paper: "#FFFFFF",
          },
        },
        typography: {
          fontFamily: "'Poppins', sans-serif",
        },
        shape: {
          borderRadius: 12,
        },
      }),
    []
  );

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rememberMe" ? checked : value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(
        value && !emailRegex.test(value) ? "Invalid email address" : ""
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          bgcolor: "background.default",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: { xs: "0 0 200px", md: 1 },
            background: "linear-gradient(45deg, #6C63FF 30%, #5A54D9 90%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LoginIcon
              sx={{ fontSize: { xs: 100, md: 200 }, color: "white" }}
            />
          </motion.div>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 2, sm: 4 },
          }}
        >
          <StyledPaper>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <LoginIcon
                  sx={{ fontSize: 40, mr: 2, color: "primary.main" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  Log In
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                Welcome back! Please enter your details.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <FormField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!emailError}
                  helperText={emailError}
                />
                <FormField
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 2, display: "block" }}
                >
                  Password should be at least 8 characters long with letters,
                  numbers, and symbols.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                    }
                    label="Remember me"
                  />
                  <Link
                    href="/forgot-password"
                    variant="body2"
                    sx={{ color: "primary.main" }}
                  >
                    Forgot password?
                  </Link>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mb: 2, height: 56 }}
                >
                  Log In
                </Button>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mx: 2 }}
                  >
                    Or continue with
                  </Typography>
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                  {["Google", "Facebook", "Apple"].map((provider) => (
                    <SocialButton
                      key={provider}
                      onClick={() => handleSocialLogin(provider)}
                    >
                      {provider === "Google" && <GoogleIcon />}
                      {provider === "Facebook" && <FacebookIcon />}
                      {provider === "Apple" && <AppleIcon />}
                    </SocialButton>
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ mt: 2 }}
                >
                  {`Don't have an account?`}
                  <Link
                    href="/signup"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </motion.div>
          </StyledPaper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignIn;
