import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  styled,
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

const BarChartCard = ({ title, value, change, description, data, color }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledCard>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
        >
          <Box>
            <Typography
              variant="body2"
              color="textSecondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h2"
              fontWeight="bold"
            >
              {value}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color={change > 0 ? "success.main" : "error.main"}
            fontWeight="bold"
          >
            {change > 0 ? `+${change}%` : `${change}%`}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
          mb={2}
        >
          {description}
        </Typography>
        <ResponsiveContainer
          width="100%"
          height={100}
        >
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              hide
            />
            <YAxis hide />
            <Tooltip />
            <Bar
              dataKey="value"
              fill={theme.palette[color].main}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </StyledCard>
  );
};

export default BarChartCard;
