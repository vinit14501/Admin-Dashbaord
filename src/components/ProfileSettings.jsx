import { useState } from "react";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  // Tabs,
  // Tab,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { styled } from "@mui/system";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "./Layout";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  margin: "0 auto",
}));

const ProfileSettings = () => {
  // const [value, setValue] = useState(0);
  const [profilePicture, setProfilePicture] = useState(null);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePortfolioProjectUpload = (event) => {
    const files = Array.from(event.target.files);
    const newProjects = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setPortfolioProjects([...portfolioProjects, ...newProjects]);
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = portfolioProjects.filter((_, i) => i !== index);
    setPortfolioProjects(updatedProjects);
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
            Profile Settings
          </Typography>
        </Box>
        {/* <Tabs
          value={value}
          onChange={handleChange}
          aria-label="account settings tabs"
          centered
        >
          <Tab label="My Details" />
          <Tab label="Profile" />
          <Tab label="Password" />
          <Tab label="Team" />
          <Tab label="Billing" />
          <Tab label="Notifications" />
          <Tab label="Integrations" />
        </Tabs> */}

        <StyledPaper elevation={3}>
          <Box sx={{ position: "relative", mb: 3 }}>
            <StyledAvatar
              alt="Profile Picture"
              src={profilePicture || "/path-to-default-image.jpg"}
            />
            <IconButton
              sx={{
                position: "absolute",
                bottom: 0,
                right: "50%",
                transform: "translateX(50%)",
                backgroundColor: "white",
              }}
              component="label"
            >
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleProfilePictureUpload}
              />
              <PhotoCameraIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            align="center"
            gutterBottom
          >
            Vinit Chaudhary
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            vinit@gmail.com
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 4 }}
          >
            View Profile
          </Button>

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Website"
            variant="outlined"
            margin="normal"
          />

          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              Your Photo
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              This will be displayed on your profile.
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCameraIcon />}
              sx={{ mt: 2 }}
            >
              Change Photo
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleProfilePictureUpload}
              />
            </Button>
          </Box>

          <TextField
            fullWidth
            label="Your bio"
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Alternative contact email"
            variant="outlined"
            margin="normal"
          />

          <Box sx={{ mt: 3, mb: 2 }}>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
              Portfolio Projects
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCameraIcon />}
            >
              Add File
              <input
                type="file"
                hidden
                multiple
                onChange={handlePortfolioProjectUpload}
              />
            </Button>
          </Box>

          <List>
            {portfolioProjects.map((project, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={project.name}
                  secondary={`${(project.size / 1024 / 1024).toFixed(2)} MB`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveProject(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </Box>
        </StyledPaper>
      </StyledContainer>
    </Layout>
  );
};

export default ProfileSettings;
