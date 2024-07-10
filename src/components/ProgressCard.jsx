import {
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from "@mui/icons-material";

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

const ProgressCard = ({ title, value, percentage, change }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledCard>
      <CardContent>
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
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          justifyContent="space-between"
        >
          <Box
            position="relative"
            display="inline-flex"
          >
            <CircularProgress
              variant="determinate"
              value={percentage}
              size={isMobile ? 50 : 60}
              thickness={5}
              color={percentage > 75 ? "error" : "primary"}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
              >
                {`${percentage}%`}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body2"
              color={change > 0 ? "success.main" : "error.main"}
              display="flex"
              alignItems="center"
            >
              {change > 0 ? (
                <TrendingUpIcon fontSize="small" />
              ) : (
                <TrendingDownIcon fontSize="small" />
              )}
              {change > 0 ? `+${change}%` : `${change}%`}
              <Typography
                variant="caption"
                color="textSecondary"
                ml={0.5}
              >
                last month
              </Typography>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProgressCard;
