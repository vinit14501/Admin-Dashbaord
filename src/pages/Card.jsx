import { Grid, Box, Typography, useTheme } from "@mui/material";
import {
  LocalActivity as LocalActivityIcon,
  Label as LabelIcon,
  ConfirmationNumber as ConfirmationIcon,
  Check as CheckIcon,
  AccountBalance as AccountBalanceIcon,
  Receipt as ReceiptIcon,
  LocalAtm as LocalAtmIcon,
  ShowChart as ShowChartIcon,
} from "@mui/icons-material";

import MetricCard from "../components/MetricCard";
import ProgressCard from "../components/ProgressCard";
import BarChartCard from "../components/BarChartCard";
import WidgetCardWithListAndChart from "../components/WidgetCardWithListAndChart";
import Layout from "../components/Layout";

const CardsPage = () => {
  const theme = useTheme();

  const barChartData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 50 },
    { name: "May", value: 45 },
    { name: "Jun", value: 60 },
    { name: "Jul", value: 55 },
  ];

  const widgetCardData = [
    {
      label: "Revenue",
      value: "$2780.00",
      icon: <AccountBalanceIcon />,
      iconBgColor: theme.palette.primary.light,
    },
    {
      label: "Profit",
      value: "$2780.00",
      icon: <LocalAtmIcon />,
      iconBgColor: theme.palette.success.light,
    },
    {
      label: "Invoices",
      value: "$2780.00",
      icon: <ReceiptIcon />,
      iconBgColor: theme.palette.error.light,
    },
    {
      label: "Expense",
      value: "$2780.00",
      icon: <ShowChartIcon />,
      iconBgColor: theme.palette.warning.light,
    },
  ];

  const widgetChartData = [
    { name: "Mon", value: 40 },
    { name: "Tue", value: 90 },
    { name: "Thu", value: 65 },
    { name: "Wed", value: 100 },
    { name: "Fri", value: 50 },
    { name: "Sun", value: 70 },
  ];

  return (
    <Layout>
      <Box sx={{ p: theme.spacing(3) }}>
        <Typography
          variant="h4"
          gutterBottom
          fontWeight="bold"
        >
          Cards
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
        >
          Home &gt; Widgets &gt; Cards
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          mt={4}
          fontWeight="bold"
        >
          MetricCard + Icon
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <MetricCard
              icon={<LocalActivityIcon />}
              title="Total Number of Tickets"
              value="12,450"
              color="primary"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <MetricCard
              icon={<LabelIcon />}
              title="Unassigned Tickets"
              value="3,590"
              color="info"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <MetricCard
              icon={<ConfirmationIcon />}
              title="Open Tickets"
              value="7,890"
              color="secondary"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <MetricCard
              icon={<CheckIcon />}
              title="Solved Tickets"
              value="1,160"
              color="success"
            />
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          gutterBottom
          mt={4}
          fontWeight="bold"
        >
          MetricCard + ProgressBar
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <ProgressCard
              title="Total Images"
              value="36,476 GB"
              percentage={32}
              change={32.4}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <ProgressCard
              title="Total Videos"
              value="53,406 GB"
              percentage={48}
              change={-18.45}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <ProgressCard
              title="Total Documents"
              value="90,875 GB"
              percentage={89}
              change={20.34}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <ProgressCard
              title="Total Musics"
              value="63,076 GB"
              percentage={54}
              change={14.45}
            />
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          gutterBottom
          mt={4}
          fontWeight="bold"
        >
          MetricCard + BarChart
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <BarChartCard
              title="Website Traffic"
              value="91.6K"
              change={32.4}
              description="Number of the visitors on the website."
              data={barChartData}
              color="primary"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <BarChartCard
              title="Conversion Rate"
              value="12.56%"
              change={-4.4}
              description="Number of the visitors turned into user."
              data={barChartData}
              color="success"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <BarChartCard
              title="Bounce Rate"
              value="45.33%"
              change={32.4}
              description="Number of the visitors went without visiting."
              data={barChartData}
              color="error"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
          >
            <BarChartCard
              title="Session Duration"
              value="2.30 hrs"
              change={32.4}
              description="Amount of time users used the website."
              data={barChartData}
              color="secondary"
            />
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          gutterBottom
          mt={4}
          fontWeight="bold"
        >
          WidgetCard + List + Chart
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <WidgetCardWithListAndChart
              title="Sales"
              subtitle="67% acquired this week"
              data={widgetCardData}
              chartData={widgetChartData}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <WidgetCardWithListAndChart
              title="Profit"
              subtitle="67% acquired this week"
              data={widgetCardData}
              chartData={widgetChartData}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default CardsPage;
