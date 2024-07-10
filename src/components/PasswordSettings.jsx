import { useState } from "react";
import {
  Container,
  // Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  // Tabs,
  // Tab,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Layout from "./Layout";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

// const GradientPaper = styled(Paper)(({ theme }) => ({
//   background: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
//   padding: theme.spacing(3),
//   marginBottom: theme.spacing(3),
// }));

// const SettingsTabs = styled(Tabs)({
//   marginBottom: "20px",
// });

const PasswordSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [activeTab, setActiveTab] = useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setActiveTab(newValue);
  // };

  const handleUpdatePassword = () => {
    // Implement password update logic
    console.log("Password updated");
  };

  return (
    <Layout>
      <StyledContainer maxWidth="md">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Password Settings
          </Typography>
        </Box>
        {/* <SettingsTabs
          value={activeTab}
          onChange={handleTabChange}
        >
          <Tab label="My Details" />
          <Tab label="Profile" />
          <Tab label="Password" />
          <Tab label="Team" />
          <Tab label="Billing" />
          <Tab label="Notifications" />
          <Tab label="Integrations" />
        </SettingsTabs> */}
        {/* <GradientPaper elevation={3}> */}
        <Box
          display="flex"
          alignItems="center"
          marginBottom={3}
        >
          <Avatar
            src="https://example.com/avatar.jpg"
            sx={{ width: 80, height: 80, marginRight: 2 }}
          />
          <Box>
            <Typography variant="h6">Vinit Chaudhary</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              vinit@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box component="form">
          <TextField
            fullWidth
            label="Current Password"
            type={showCurrentPassword ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  edge="end"
                >
                  {showCurrentPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            label="New Password"
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin="normal"
            helperText="Your password must be more than 8 characters"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Confirm New Password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              ),
            }}
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            marginTop={2}
          >
            <Button
              variant="outlined"
              sx={{ marginRight: 1 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdatePassword}
            >
              Update Password
            </Button>
          </Box>
        </Box>
        {/* </GradientPaper> */}
      </StyledContainer>
    </Layout>
  );
};

export default PasswordSettings;
