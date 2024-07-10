import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  TextField,
  IconButton,
  Avatar,
  Chip,
  TablePagination,
} from "@mui/material";
import {
  AccountBalanceOutlined,
  LocalShippingOutlined,
  AttachMoneyOutlined,
  FolderOpenOutlined,
  Edit,
  Visibility,
  Delete,
  Search,
} from "@mui/icons-material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Layout from "../components/Layout";

const Financial = () => {
  const summaryData = [
    {
      title: "Total Income",
      value: "$16,085k",
      change: 32.45,
      icon: <AccountBalanceOutlined />,
      color: "#9c27b0",
    },
    {
      title: "Total Orders",
      value: "$25,786k",
      change: -32.45,
      icon: <LocalShippingOutlined />,
      color: "#00bcd4",
    },
    {
      title: "Net Profit",
      value: "$38,503k",
      change: 32.45,
      icon: <AttachMoneyOutlined />,
      color: "#2196f3",
    },
    {
      title: "Total Expense",
      value: "$27,432k",
      change: -32.45,
      icon: <FolderOpenOutlined />,
      color: "#ff9800",
    },
  ];

  const chartData = [
    { name: "Mon", revenue: 100, expenses: 75 },
    { name: "Tue", revenue: 80, expenses: 45 },
    { name: "Wed", revenue: 45, expenses: 65 },
    { name: "Thu", revenue: 45, expenses: 80 },
    { name: "Fri", revenue: 20, expenses: 30 },
    { name: "Sat", revenue: 75, expenses: 55 },
    { name: "Sun", revenue: 80, expenses: 45 },
  ];

  const budgetData = [
    { name: "Desler Inc & Co.", value: 108.9, max: 350 },
    { name: "Matro Private Ltd.", value: 413.5, max: 580 },
    { name: "Henry & Brothers", value: 108.9, max: 350 },
    { name: "Ammey Beauty Parler", value: 893.7, max: 1250 },
  ];

  const transactionData = [
    {
      id: "#3416",
      date: "November 10, 2022 11:52 AM",
      recipient: "Johnnie Kassulke",
      email: "johnnie.kassulke@example.com",
      type: "Yearly Bonus",
      amount: 450.54,
      currency: "USD",
      method: "mastercard",
      cardNumber: "4242",
      status: "Complete",
    },
    {
      id: "#3417",
      date: "February 6, 2023 11:16 PM",
      recipient: "Dr. Marcos McGlynn",
      email: "marcos@example.com",
      type: "Employee Salary",
      amount: 450.54,
      currency: "Euro",
      method: "visa",
      cardNumber: "5846",
      status: "Pending",
    },
    {
      id: "#3418",
      date: "March 6, 2022 10:40 AM",
      recipient: "Omar Haag",
      email: "omar@example.com",
      type: "Factory Expense",
      amount: 450.54,
      currency: "Riyal",
      method: "mastercard",
      cardNumber: "4242",
      status: "Canceled",
    },
    {
      id: "#3419",
      date: "September 28, 2021 3:17 AM",
      recipient: "Susie Beatty",
      email: "susie@example.com",
      type: "Employee Salary",
      amount: 450.54,
      currency: "Dirham",
      method: "mastercard",
      cardNumber: "4242",
      status: "Complete",
    },
    {
      id: "#3420",
      date: "November 26, 2021 12:04 PM",
      recipient: "Kristie Ziemann",
      email: "kristie@example.com",
      type: "Factory Expense",
      amount: 450.54,
      currency: "USD",
      method: "visa",
      cardNumber: "5846",
      status: "Canceled",
    },
    {
      id: "#3421",
      date: "November 10, 2022 11:52 AM",
      recipient: "Johnnie Kassulke",
      email: "johnnie.kassulke@example.com",
      type: "Factory Expense",
      amount: 450.54,
      currency: "USD",
      method: "mastercard",
      cardNumber: "4242",
      status: "Pending",
    },
    {
      id: "#3422",
      date: "February 6, 2023 11:16 PM",
      recipient: "Dr. Marcos McGlynn",
      email: "marcos@example.com",
      type: "Factory Expense",
      amount: 450.54,
      currency: "Euro",
      method: "visa",
      cardNumber: "5846",
      status: "Complete",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Complete":
        return "success";
      case "Pending":
        return "warning";
      case "Canceled":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {summaryData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Card>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{ bgcolor: item.color, p: 1, borderRadius: 1, mr: 2 }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6">{item.title}</Typography>
                  </Box>
                  <Typography variant="h4">{item.value}</Typography>
                  <Typography
                    variant="body2"
                    color={item.change > 0 ? "success.main" : "error.main"}
                  >
                    {item.change > 0 ? "↑" : "↓"} {Math.abs(item.change)}%{" "}
                    {item.change > 0 ? "Increased" : "Decreased"} last month
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid
            item
            xs={12}
            md={8}
          >
            <Paper sx={{ p: 2 }}>
              <Typography
                variant="h6"
                gutterBottom
              >
                Total Statistics
              </Typography>
              <ResponsiveContainer
                width="100%"
                height={300}
              >
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="revenue"
                    fill="#4caf50"
                  />
                  <Bar
                    dataKey="expenses"
                    fill="#212121"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
          >
            <Paper sx={{ p: 2 }}>
              <Typography
                variant="h6"
                gutterBottom
              >
                Budget Status
              </Typography>
              <Typography variant="h4">
                $7,590{" "}
                <Typography
                  component="span"
                  variant="body1"
                >
                  out of $10,000
                </Typography>
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75.9}
                sx={{ my: 2 }}
              />
              {budgetData.map((item, index) => (
                <Box
                  key={index}
                  sx={{ mb: 2 }}
                >
                  <Typography variant="body2">{item.name}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ flexGrow: 1, mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={(item.value / item.max) * 100}
                      />
                    </Box>
                    <Typography variant="body2">
                      ${item.value}/${item.max}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Paper sx={{ mt: 3, p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6">Transaction History</Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Select
                    defaultValue=""
                    displayEmpty
                    size="small"
                  >
                    <MenuItem
                      value=""
                      disabled
                    >
                      Select type
                    </MenuItem>
                  </Select>
                  <Select
                    defaultValue=""
                    displayEmpty
                    size="small"
                  >
                    <MenuItem
                      value=""
                      disabled
                    >
                      Select status
                    </MenuItem>
                  </Select>
                  <TextField
                    size="small"
                    placeholder="Search for user details..."
                    InputProps={{
                      endAdornment: <Search />,
                    }}
                  />
                </Box>
              </Box>
              <TableContainer>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="transaction table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell>USER ID</TableCell>
                      <TableCell>DATE</TableCell>
                      <TableCell>RECIPIENT</TableCell>
                      <TableCell>TYPE</TableCell>
                      <TableCell>AMOUNT</TableCell>
                      <TableCell>CURRENCY</TableCell>
                      <TableCell>METHOD</TableCell>
                      <TableCell>STATUS</TableCell>
                      <TableCell>ACTIONS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactionData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell padding="checkbox">
                            <input type="checkbox" />
                          </TableCell>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Avatar sx={{ width: 24, height: 24, mr: 1 }} />
                              <Box>
                                <Typography variant="body2">
                                  {row.recipient}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {row.email}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>${row.amount}</TableCell>
                          <TableCell>{row.currency}</TableCell>
                          <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              {row.method === "mastercard" ? (
                                <img
                                  src="/path-to-mastercard-icon.png"
                                  alt="Mastercard"
                                  width="24"
                                />
                              ) : (
                                <img
                                  src="/path-to-visa-icon.png"
                                  alt="Visa"
                                  width="24"
                                />
                              )}
                              <Typography
                                variant="body2"
                                sx={{ ml: 1 }}
                              >
                                ***{row.cardNumber}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={row.status}
                              color={getStatusColor(row.status)}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton size="small">
                              <Edit fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                              <Visibility fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                              <Delete fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[7, 10, 25]}
                component="div"
                count={transactionData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Financial;
