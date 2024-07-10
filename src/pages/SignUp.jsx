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
  PersonAdd as PersonAddIcon,
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
      [name]: name === "agreeTerms" ? checked : value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(
        value && !emailRegex.test(value) ? "Invalid email address" : ""
      );
    }

    if (name === "password" || name === "confirmPassword") {
      setPasswordError(
        formData.password !== formData.confirmPassword
          ? "Passwords do not match"
          : ""
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Signing up with ${provider}`);
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
            <PersonAddIcon
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
                <PersonAddIcon
                  sx={{ fontSize: 40, mr: 2, color: "primary.main" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  Sign Up
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="text.secondary"
                gutterBottom
              >
                Create an account to get started.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <FormField
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
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
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!passwordError}
                  helperText={passwordError}
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
                <FormField
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!passwordError}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree to the{" "}
                      <Link
                        href="#"
                        sx={{ color: "primary.main" }}
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        sx={{ color: "primary.main" }}
                      >
                        Privacy Policy
                      </Link>
                    </Typography>
                  }
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mb: 2, height: 56 }}
                  disabled={!formData.agreeTerms}
                >
                  Sign Up
                </Button>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mx: 2 }}
                  >
                    Or sign up with
                  </Typography>
                  <Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                  {["Google", "Facebook", "Apple"].map((provider) => (
                    <SocialButton
                      key={provider}
                      onClick={() => handleSocialSignUp(provider)}
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
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    Log in
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

export default SignUp;
