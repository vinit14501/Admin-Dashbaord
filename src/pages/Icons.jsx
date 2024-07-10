/* eslint-disable react/display-name */
import { useState, useMemo, useCallback, memo } from "react";
import * as MuiIcons from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Typography,
  Container,
  InputBase,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Layout from "../components/Layout";

/* eslint-disable */
const IconItem = memo(({ iconName, handleCopy }) => {
  const IconComponent = MuiIcons[iconName];
  const handleIconCopy = useCallback(
    () => handleCopy(iconName),
    [handleCopy, iconName]
  );

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
    >
      <Paper
        elevation={2}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          transition: "all 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 4,
          },
        }}
      >
        <CopyToClipboard
          text={`<${iconName} />`}
          onCopy={handleIconCopy}
        >
          <Tooltip title={`Click to copy <${iconName} />`}>
            <IconButton>
              <IconComponent fontSize="large" />
            </IconButton>
          </Tooltip>
        </CopyToClipboard>
        <Typography
          variant="caption"
          align="center"
          sx={{ mt: 1, wordBreak: "break-word" }}
        >
          {iconName}
        </Typography>
      </Paper>
    </Grid>
  );
});

const IconShowcase = () => {
  const [copiedIcon, setCopiedIcon] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCopy = useCallback((iconName) => {
    setCopiedIcon(iconName);
    setOpenSnackbar(true);
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false);
  }, []);

  const handleSearchChange = useCallback((e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }, []);

  const getRandomIcons = useMemo(() => {
    return (count) => {
      const iconNames = Object.keys(MuiIcons).filter(
        (name) => name !== "default"
      );
      return [...iconNames].sort(() => 0.5 - Math.random()).slice(0, count);
    };
  }, []);

  const randomIcons = useMemo(() => getRandomIcons(250), [getRandomIcons]);

  const filteredIcons = useMemo(() => {
    return randomIcons.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [randomIcons, searchTerm]);

  const searchPaperStyles = useMemo(
    () => ({
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      borderRadius: "28px",
    }),
    []
  );

  const searchIconButtonStyles = useMemo(() => ({ p: "10px" }), []);
  const searchInputBaseStyles = useMemo(() => ({ ml: 1, flex: 1 }), []);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box py={4}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            Material-UI Icons Showcase
          </Typography>
          <Box mb={4}>
            <Paper
              elevation={3}
              sx={searchPaperStyles}
            >
              <IconButton
                sx={searchIconButtonStyles}
                aria-label="search"
              >
                <MuiIcons.Search />
              </IconButton>
              <InputBase
                sx={searchInputBaseStyles}
                placeholder="Search icons..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Paper>
          </Box>
          <Paper elevation={3}>
            <Box p={3}>
              <Grid
                container
                spacing={3}
              >
                {filteredIcons.map((iconName) => (
                  <IconItem
                    key={iconName}
                    iconName={iconName}
                    handleCopy={handleCopy}
                  />
                ))}
              </Grid>
            </Box>
          </Paper>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Copied <code>{`<${copiedIcon} />`}</code> to clipboard!
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Layout>
  );
};

export default IconShowcase;
