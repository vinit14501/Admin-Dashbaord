import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const WidgetCardWithListAndChart = ({ title, subtitle, data, chartData }) => {
  const theme = useTheme();

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
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {subtitle}
          </Typography>
        </Box>
        <List>
          {data.map((item, index) => (
            <ListItem
              key={index}
              disableGutters
            >
              <ListItemIcon>
                <Box
                  sx={{
                    backgroundColor: item.iconBgColor,
                    borderRadius: "50%",
                    padding: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                secondary={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                  >
                    {item.value}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <ResponsiveContainer
          width="100%"
          height={200}
        >
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill={theme.palette.primary.main}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </StyledCard>
  );
};

export default WidgetCardWithListAndChart;
