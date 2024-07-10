import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  useTheme,
  useMediaQuery,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
} from "@mui/material";

import {
  ConfirmationNumber as ConfirmationIcon,
  LocalActivity as LocalActivityIcon,
  Label as LabelIcon,
  Check as CheckIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  AccountBalance as AccountBalanceIcon,
  Receipt as ReceiptIcon,
  LocalAtm as LocalAtmIcon,
  ShowChart as ShowChartIcon,
  EmojiEvents as TrophyIcon,
} from "@mui/icons-material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ... (Keep all existing styled components and card components)

const ParticipantsList = () => {
  const participants = [
    { name: "Albert Flores", email: "tanya.hill@example.com", trophy: "gold" },
    {
      name: "Jenny Wilson",
      email: "michael.mitc@example.com",
      trophy: "silver",
    },
    {
      name: "Bessie Cooper",
      email: "curtis.weaver@example.com",
      trophy: "bronze",
    },
    { name: "Wade Warren", email: "debra.holt@example.com", trophy: "silver" },
    { name: "Robert Fox", email: "michael.mitc@example.com", trophy: "silver" },
    { name: "Sungla hass", email: "sungla@example.com", trophy: "bronze" },
    { name: "Shoeie Fashio", email: "fashio@example.com", trophy: "silver" },
  ];

  return (
    <StyledCard>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h6"
            component="h2"
            fontWeight="bold"
          >
            Participants
          </Typography>
          <Button
            variant="text"
            color="primary"
          >
            View All
          </Button>
        </Box>
        <List>
          {participants.map((participant, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <ListItemIcon>
                <Avatar src={`https://i.pravatar.cc/150?img=${index}`} />
              </ListItemIcon>
              <ListItemText
                primary={participant.name}
                secondary={participant.email}
              />
              <TrophyIcon
                color={
                  participant.trophy === "gold"
                    ? "warning"
                    : participant.trophy === "silver"
                    ? "action"
                    : "error"
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

const RecentAppsList = () => {
  const recentApps = [
    {
      name: "Teams",
      description:
        "Streamline software projects, sprints, tasks, and bug trackin...",
      icon: "https://example.com/teams-icon.png",
    },
    {
      name: "Github",
      description: "Link pull requests and automate workflows.",
      icon: "https://example.com/github-icon.png",
    },
    {
      name: "Figma",
      description: "Embed file previews in projects.",
      icon: "https://example.com/figma-icon.png",
    },
    {
      name: "Notion",
      description: "Embed notion pages and notes in projects.",
      icon: "https://example.com/notion-icon.png",
    },
    {
      name: "Slack",
      description:
        "Send notifications to channels and create projects from me...",
      icon: "https://example.com/slack-icon.png",
    },
    {
      name: "Airtable",
      description:
        "Manage your projects using airtable a cloud collaboration s...",
      icon: "https://example.com/airtable-icon.png",
    },
    {
      name: "Telegram",
      description:
        "Send messages through a globally accessible freemium, clo...",
      icon: "https://example.com/telegram-icon.png",
    },
  ];

  return (
    <StyledCard>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h6"
            component="h2"
            fontWeight="bold"
          >
            Recent Apps
          </Typography>
          <Button
            variant="text"
            color="primary"
          >
            View All
          </Button>
        </Box>
        <List>
          {recentApps.map((app, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <ListItemIcon>
                <Avatar src={app.icon} />
              </ListItemIcon>
              <ListItemText
                primary={app.name}
                secondary={app.description}
              />
              <Button
                variant="text"
                color="primary"
              >
                ↗
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

const Dashboard = () => {
  const theme = useTheme();

  // ... (Keep all existing data and chart configurations)

  return (
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

      {/* ... (Keep all existing sections) */}

      <Typography
        variant="h6"
        gutterBottom
        mt={4}
        fontWeight="bold"
      >
        Participants and Recent Apps
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
          <ParticipantsList />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          <RecentAppsList />
        </Grid>
      </Grid>

      {/* ... (Keep all existing sections) */}
    </Box>
  );
};

export default Dashboard;
