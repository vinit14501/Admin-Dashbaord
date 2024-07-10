import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
  MoreVert as MoreVertIcon,
  Analytics as AnalyticsIcon,
  MonetizationOn as FinancialIcon,
  GridView as GridViewIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";

const drawerWidth = 210;

const Sidebar = ({ open }) => {
  const [openSubMenu, setOpenSubMenu] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubMenuClick = (text) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [text]: !prevState[text],
    }));
  };

  const menuItems = [
    { text: "Job Board", icon: <DashboardIcon />, link: "/" },
    { text: "Analytics", icon: <AnalyticsIcon />, link: "/analytics" },
    { text: "Financial", icon: <FinancialIcon />, link: "/financial" },
    { text: "Cards", icon: <GridViewIcon />, link: "/cards" },
    { text: "Icons", icon: <AppsIcon />, link: "/icons" },
    {
      text: "Profile",
      icon: <PersonIcon />,
      // link: "/profile",
      subItems: [
        {
          text: "Account Settings",
          icon: <StarBorder />,
          link: "/account-settings",
        },
        {
          text: "Profile Settings",
          icon: <SettingsIcon />,
          link: "/profile-settings",
        },
        {
          text: "Password Settings",
          icon: <SettingsIcon />,
          link: "/password-settings",
        },
      ],
    },
    {
      text: "Authentication",
      icon: <PersonIcon />,
      // link: "/auth",
      subItems: [
        { text: "Sign-In", icon: <StarBorder />, link: "/login" },
        { text: "Sign-Up", icon: <SettingsIcon />, link: "/signup" },
        {
          text: "Forgot Password",
          icon: <SettingsIcon />,
          link: "/forgot-password",
        },
        {
          text: "OTP Generation",
          icon: <SettingsIcon />,
          link: "/OTP-Generation",
        },
      ],
    },
  ];

  const renderMenuItem = (item, depth = 0) => (
    <React.Fragment key={item.text}>
      <ListItemButton
        component={Link}
        to={item.link}
        onClick={() => item.subItems && handleSubMenuClick(item.text)}
        sx={{ pl: 2 + depth * 2 }}
      >
        <ListItemIcon sx={{ color: "inherit", minWidth: isMobile ? 0 : 30 }}>
          {item.icon}
        </ListItemIcon>
        {(!isMobile || open) && <ListItemText primary={item.text} />}
        {item.subItems &&
          (!isMobile || open) &&
          (openSubMenu[item.text] ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {item.subItems && (
        <Collapse
          in={openSubMenu[item.text]}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            {item.subItems.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : theme.spacing(7),
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : theme.spacing(7),
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Box sx={{ height: 64 }} /> {/* Toolbar spacer */}
      <List>{menuItems.map((item) => renderMenuItem(item))}</List>
      {isMobile && (
        <Box sx={{ position: "fixed", bottom: 0, left: 0, p: 1 }}>
          <IconButton color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Box>
      )}
    </Drawer>
  );
};

export default Sidebar;
