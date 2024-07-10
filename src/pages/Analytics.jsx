import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Pagination,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import Layout from "../components/Layout";

const DashboardCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
}));

const WebsiteMetricsTable = () => {
  const metricsData = [
    {
      channel: "Amazon",
      newUsers: 575,
      engagedSessions: 9844,
      engagementRate: 70.03,
      engagementTime: "36m 11s",
      bounceRate: 34.11,
      activity: [30, 40, 35, 50, 45, 60, 55],
    },
    {
      channel: "Youtube",
      newUsers: 706,
      engagedSessions: 1868,
      engagementRate: 53.05,
      engagementTime: "02m 45s",
      bounceRate: 21.19,
      activity: [20, 30, 25, 40, 35, 45, 40],
    },
    {
      channel: "Facebook",
      newUsers: 159,
      engagedSessions: 7611,
      engagementRate: 67.02,
      engagementTime: "21m 14s",
      bounceRate: 16.39,
      activity: [25, 35, 30, 45, 40, 50, 45],
    },
    {
      channel: "Direct",
      newUsers: 132,
      engagedSessions: 1917,
      engagementRate: 78.28,
      engagementTime: "00m 43s",
      bounceRate: 30.25,
      activity: [35, 45, 40, 55, 50, 65, 60],
    },
    {
      channel: "Facebook",
      newUsers: 2,
      engagedSessions: 7212,
      engagementRate: 16.57,
      engagementTime: "45m 02s",
      bounceRate: 41.09,
      activity: [15, 25, 20, 35, 30, 40, 35],
    },
    {
      channel: "Youtube",
      newUsers: 539,
      engagedSessions: 7424,
      engagementRate: 18.98,
      engagementTime: "04m 22s",
      bounceRate: 27.01,
      activity: [10, 20, 15, 30, 25, 35, 30],
    },
    {
      channel: "Youtube",
      newUsers: 454,
      engagedSessions: 1620,
      engagementRate: 9.9,
      engagementTime: "30m 20s",
      bounceRate: 5.89,
      activity: [5, 15, 10, 25, 20, 30, 25],
    },
  ];

  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Website Metrics</Typography>
          <TextField
            size="small"
            placeholder="Search metrics..."
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>CHANNEL</StyledTableCell>
                <StyledTableCell align="right">NEW USERS</StyledTableCell>
                <StyledTableCell align="right">
                  ENGAGED SESSIONS
                </StyledTableCell>
                <StyledTableCell align="right">ENGAGEMENT RATE</StyledTableCell>
                <StyledTableCell align="right">ENGAGEMENT TIME</StyledTableCell>
                <StyledTableCell align="right">BOUNCE RATE</StyledTableCell>
                <StyledTableCell align="right">ACTIVITY</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {metricsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {row.channel}
                  </TableCell>
                  <TableCell align="right">{row.newUsers}</TableCell>
                  <TableCell align="right">{row.engagedSessions}</TableCell>
                  <TableCell align="right">
                    {row.engagementRate > 50 ? (
                      <ArrowDropUpIcon color="success" />
                    ) : (
                      <ArrowDropDownIcon color="error" />
                    )}
                    {row.engagementRate}%
                  </TableCell>
                  <TableCell align="right">{row.engagementTime}</TableCell>
                  <TableCell align="right">
                    {row.bounceRate < 30 ? (
                      <ArrowDropUpIcon color="success" />
                    ) : (
                      <ArrowDropDownIcon color="error" />
                    )}
                    {row.bounceRate}%
                  </TableCell>
                  <TableCell align="right">
                    <ResponsiveContainer
                      width={100}
                      height={30}
                    >
                      <LineChart
                        data={row.activity.map((value, i) => ({
                          name: i,
                          value,
                        }))}
                      >
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <Typography variant="body2">1 of 3 pages</Typography>
          <Pagination
            count={3}
            color="primary"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const AnalyticsPage = () => {
  // Sample data for charts
  const lineChartData = [
    { name: "Mon", value: 65 },
    { name: "Tue", value: 59 },
    { name: "Wed", value: 80 },
    { name: "Thu", value: 81 },
    { name: "Fri", value: 56 },
    { name: "Sat", value: 55 },
    { name: "Sun", value: 40 },
  ];

  const areaChartData = [
    { name: "Mon", value: 40 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 60 },
    { name: "Thu", value: 40 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 60 },
    { name: "Sun", value: 80 },
  ];

  const barChartData = [
    { name: "Mon", Mobile: 90, Desktop: 40 },
    { name: "Tue", Mobile: 50, Desktop: 80 },
    { name: "Wed", Mobile: 70, Desktop: 60 },
    { name: "Thu", Mobile: 30, Desktop: 50 },
    { name: "Fri", Mobile: 50, Desktop: 40 },
    { name: "Sat", Mobile: 75, Desktop: 85 },
    { name: "Sun", Mobile: 100, Desktop: 60 },
  ];

  const pieChartData = [
    { name: "Referral", value: 2560 },
    { name: "Social Media", value: 2150 },
    { name: "Email", value: 2780 },
    { name: "Google", value: 2000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {/* Website Traffic */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Website Traffic</Typography>
                <Typography variant="h4">91.6K</Typography>
                <Typography
                  variant="subtitle2"
                  color="success.main"
                >
                  +32.40%
                </Typography>
                <ResponsiveContainer
                  width="100%"
                  height={100}
                >
                  <LineChart data={lineChartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Conversion Rate */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Conversion Rate</Typography>
                <Typography variant="h4">12.56%</Typography>
                <Typography
                  variant="subtitle2"
                  color="error.main"
                >
                  -4.40%
                </Typography>
                <ResponsiveContainer
                  width="100%"
                  height={100}
                >
                  <LineChart data={lineChartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#82ca9d"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Bounce Rate */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Bounce Rate</Typography>
                <Typography variant="h4">45.33%</Typography>
                <Typography
                  variant="subtitle2"
                  color="success.main"
                >
                  +32.40%
                </Typography>
                <ResponsiveContainer
                  width="100%"
                  height={100}
                >
                  <LineChart data={lineChartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#ffc658"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Session Duration */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Session Duration</Typography>
                <Typography variant="h4">2.30 hrs</Typography>
                <Typography
                  variant="subtitle2"
                  color="success.main"
                >
                  +32.40%
                </Typography>
                <ResponsiveContainer
                  width="100%"
                  height={100}
                >
                  <LineChart data={lineChartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#ff7300"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Acquisition */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Acquisition</Typography>
                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <AreaChart data={areaChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Device Sessions */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Device Sessions</Typography>
                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="Mobile"
                      fill="#8884d8"
                    />
                    <Bar
                      dataKey="Desktop"
                      fill="#82ca9d"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Top Traffic Source */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <DashboardCard>
              <CardContent>
                <Typography variant="h6">Top Traffic Source</Typography>
                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </DashboardCard>
          </Grid>

          {/* Website Metrics Table */}
          <Grid
            item
            xs={12}
          >
            <WebsiteMetricsTable />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default AnalyticsPage;
