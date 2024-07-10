import { useState, useMemo } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Paper,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import { LockReset as LockResetIcon } from "@mui/icons-material";
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

const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
  },
}));

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      value && !emailRegex.test(value) ? "Invalid email address" : ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && email) {
      // Handle form submission
      console.log("Reset password requested for:", email);
      setIsSubmitted(true);
    }
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
            <LockResetIcon
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
                <LockResetIcon
                  sx={{ fontSize: 40, mr: 2, color: "primary.main" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  Forgot Password
                </Typography>
              </Box>
              {!isSubmitted ? (
                <>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {`Enter your email address and we'll send you a link to reset
                    your password.`}
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
                      value={email}
                      onChange={handleChange}
                      error={!!emailError}
                      helperText={emailError}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ mb: 2, height: 56 }}
                      disabled={!email || !!emailError}
                    >
                      Send Reset Link
                    </Button>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ mt: 2 }}
                    >
                      Remember your password?{" "}
                      <Link
                        href="login"
                        sx={{ color: "primary.main", fontWeight: "bold" }}
                      >
                        Log in
                      </Link>
                    </Typography>
                  </Box>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Reset Link Sent
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    {`We've sent a password reset link to your email address.
                    Please check your inbox and follow the instructions to reset
                    your password.`}
                  </Typography>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    sx={{ mt: 4, height: 56 }}
                    onClick={() => setIsSubmitted(false)}
                  >
                    Back to Forgot Password
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </StyledPaper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Forgot;
