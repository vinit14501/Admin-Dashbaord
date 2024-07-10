import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
} from "@mui/material";
import {
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  CloudDownload as CloudDownloadIcon,
  AccessTime as AccessTimeIcon,
  Pause as PauseIcon,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import Layout from "../components/Layout";

const JobBoard = () => {
  const [timeFrame, setTimeFrame] = React.useState("weekly");

  const cardData = [
    {
      title: "Active Jobs",
      value: "15,786",
      change: "+32.40%",
      icon: <ArrowUpwardIcon color="success" />,
    },
    {
      title: "Published Jobs",
      value: "20,129",
      change: "+40.29%",
      icon: <CloudDownloadIcon color="success" />,
    },
    {
      title: "Shortlisted",
      value: "8,503",
      change: "-32.40%",
      icon: <ArrowDownwardIcon color="error" />,
    },
    {
      title: "On Hold",
      value: "2,430",
      change: "+32.40%",
      icon: <PauseIcon color="success" />,
    },
  ];

  const chartData = [
    { name: "Fri", active: 8500, onHold: 4800, shortlisted: 1500 },
    { name: "Thu", active: 7800, onHold: 5900, shortlisted: 1200 },
    { name: "Wed", active: 2500, onHold: 3800, shortlisted: 1000 },
    { name: "Tue", active: 4500, onHold: 6800, shortlisted: 1200 },
    { name: "Mon", active: 5000, onHold: 8500, shortlisted: 3200 },
    { name: "Sun", active: 8800, onHold: 4900, shortlisted: 1500 },
    { name: "Sat", active: 10000, onHold: 7800, shortlisted: 1800 },
  ];

  const deviceData = [
    { name: "Desktop", value: 12723, color: "#1976d2" },
    { name: "Tablet", value: 9304, color: "#9c27b0" },
    { name: "Mobile", value: 8530, color: "#e91e63" },
  ];

  const referrerData = [
    { name: "Instagram", value: 67 },
    { name: "LinkedIn", value: 81 },
    { name: "Pinterest", value: 67 },
    { name: "Google Search", value: 38 },
    { name: "Others", value: 38 },
  ];

  const DeviceAnalytics = () => (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Device Analytics</Typography>
          <ToggleButtonGroup
            value={timeFrame}
            exclusive
            onChange={(event, newTimeFrame) => setTimeFrame(newTimeFrame)}
            size="small"
          >
            <ToggleButton value="Jul, 2024">Jul, 2024</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Typography variant="h4">2,87,095</Typography>
        <Typography
          variant="body2"
          color="success.main"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ArrowUpwardIcon fontSize="small" />
          32.40%
        </Typography>
        <Box sx={{ height: 200, mt: 2 }}>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={deviceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={60}
              >
                {deviceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <List>
          {deviceData.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  mr: 1,
                }}
              />
              <ListItemText
                primary={item.name}
                secondary={`${item.value}+`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  const TopReferrers = () => (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Top Referrers</Typography>
          <ToggleButtonGroup
            value={timeFrame}
            exclusive
            onChange={(event, newTimeFrame) => setTimeFrame(newTimeFrame)}
            size="small"
          >
            <ToggleButton value="weekly">Weekly</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Typography variant="h4">75,045k</Typography>
        <Typography
          variant="body2"
          color="success.main"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <ArrowUpwardIcon fontSize="small" />
          32.40%
        </Typography>
        <List>
          {referrerData.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <ListItemText primary={item.name} />
              <Box sx={{ width: "60%", ml: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={item.value}
                  sx={{ height: 8, borderRadius: 5 }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ ml: 2 }}
              >
                {item.value}K
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {cardData.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                  >
                    {card.value}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {card.icon}
                    <Typography
                      variant="body2"
                      color={
                        card.change.startsWith("+")
                          ? "success.main"
                          : "error.main"
                      }
                    >
                      {card.change} Increased last month
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 2, mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">Job Overview</Typography>
            <ToggleButtonGroup
              value={timeFrame}
              exclusive
              onChange={(event, newTimeFrame) => setTimeFrame(newTimeFrame)}
              size="small"
            >
              <ToggleButton value="daily">Daily</ToggleButton>
              <ToggleButton value="weekly">Weekly</ToggleButton>
              <ToggleButton value="monthly">Monthly</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="active"
                fill="#1976d2"
              />
              <Bar
                dataKey="onHold"
                fill="#9e9e9e"
              />
              <Bar
                dataKey="shortlisted"
                fill="#bbdefb"
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        <Grid
          container
          spacing={3}
          sx={{ mt: 3 }}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <DeviceAnalytics />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <TopReferrers />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default JobBoard;
