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
import { VpnKey as VpnKeyIcon } from "@mui/icons-material";
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

const Otp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

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

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      value && !emailRegex.test(value) ? "Invalid email address" : ""
    );
  };

  const handleOtpChange = (event) => {
    const { value } = event.target;
    setOtp(value);

    const otpRegex = /^\d{6}$/;
    setOtpError(value && !otpRegex.test(value) ? "OTP must be 6 digits" : "");
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!emailError && email) {
      // Handle OTP sending (In a real app, this would be an API call)
      console.log("OTP sent to:", email);
      setIsOtpSent(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!otpError && otp) {
      // Handle OTP verification (In a real app, this would be an API call)
      console.log("OTP verified:", otp);
      setIsVerified(true);
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
            <VpnKeyIcon
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
                <VpnKeyIcon
                  sx={{ fontSize: 40, mr: 2, color: "primary.main" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  OTP Verification
                </Typography>
              </Box>
              {!isVerified ? (
                <>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {isOtpSent
                      ? "Enter the 6-digit OTP sent to your email."
                      : "Enter your email address to receive a one-time password."}
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp}
                    sx={{ mt: 3 }}
                  >
                    {!isOtpSent && (
                      <FormField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailChange}
                        error={!!emailError}
                        helperText={emailError}
                      />
                    )}
                    {isOtpSent && (
                      <FormField
                        fullWidth
                        id="otp"
                        label="One-Time Password"
                        name="otp"
                        value={otp}
                        onChange={handleOtpChange}
                        error={!!otpError}
                        helperText={otpError}
                      />
                    )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ mb: 2, height: 56 }}
                      disabled={
                        isOtpSent ? !otp || !!otpError : !email || !!emailError
                      }
                    >
                      {isOtpSent ? "Verify OTP" : "Send OTP"}
                    </Button>
                    {isOtpSent && (
                      <Button
                        fullWidth
                        variant="outlined"
                        size="large"
                        sx={{ mb: 2, height: 56 }}
                        onClick={() => setIsOtpSent(false)}
                      >
                        Back to Email Entry
                      </Button>
                    )}
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ mt: 2 }}
                    >
                      Remember your password?{" "}
                      <Link
                        href="/login"
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
                    OTP Verified Successfully
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    Your identity has been verified. You can now proceed with
                    your account actions.
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 4, height: 56 }}
                    onClick={() => {
                      /* Handle next steps */
                    }}
                  >
                    Continue
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

export default Otp;
