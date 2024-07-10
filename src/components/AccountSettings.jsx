import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Box,
  Chip,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  PhotoCamera,
  CloudUpload,
  Save,
  LinkedIn,
  GitHub,
  Twitter,
} from "@mui/icons-material";
import Layout from "./Layout";

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ProfileImage = styled("div")(({ theme }) => ({
  width: 150,
  height: 150,
  borderRadius: "50%",
  backgroundColor: theme.palette.grey[200],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: theme.spacing(3),
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: theme.spacing(1, 4),
  textTransform: "none",
  fontWeight: 600,
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const AccountSettings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    country: "",
    timezone: "",
    bio: "",
    skills: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSkillAdd = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };

  const handleSkillDelete = (skillToDelete) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToDelete),
    });
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
            Account Settings
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              xs={12}
            >
              <ProfileImage>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
              </ProfileImage>
              <Box textAlign="center">
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <StyledButton
                    variant="outlined"
                    color="primary"
                    component="span"
                    startIcon={<PhotoCamera />}
                  >
                    Change Photo
                  </StyledButton>
                </label>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
            >
              <Select
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="developer">Developer</MenuItem>
                <MenuItem value="designer">Designer</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
              </Select>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
            >
              <Select
                fullWidth
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="">Select Country</MenuItem>
                <MenuItem value="in">India</MenuItem>
                <MenuItem value="us">United States</MenuItem>
                <MenuItem value="ca">Canada</MenuItem>
              </Select>
            </Grid>

            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                multiline
                rows={4}
                value={formData.bio}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                Skills
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={1}
                mb={2}
              >
                {formData.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={() => handleSkillDelete(skill)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
              <TextField
                fullWidth
                label="Add Skill"
                variant="outlined"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSkillAdd(e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Divider />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                Social Profiles
              </Typography>
              <Box
                display="flex"
                gap={2}
              >
                <SocialButton>
                  <LinkedIn />
                </SocialButton>
                <SocialButton>
                  <GitHub />
                </SocialButton>
                <SocialButton>
                  <Twitter />
                </SocialButton>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Typography
                variant="h6"
                gutterBottom
              >
                Portfolio Projects
              </Typography>
              <StyledButton
                variant="outlined"
                startIcon={<CloudUpload />}
                component="label"
                fullWidth={isMobile}
              >
                Upload Project
                <input
                  hidden
                  accept="image/*,application/pdf"
                  multiple
                  type="file"
                />
              </StyledButton>
            </Grid>

            <Grid
              item
              xs={12}
            >
              <StyledButton
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<Save />}
                fullWidth={isMobile}
                size="large"
              >
                Save Changes
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </StyledContainer>
    </Layout>
  );
};

export default AccountSettings;
