import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";

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

const IconWrapper = styled(Box)(({ theme, color }) => ({
  backgroundColor: theme.palette[color].light,
  borderRadius: "50%",
  padding: theme.spacing(1.5),
  display: "inline-flex",
}));

const MetricCard = ({ icon, title, value, color = "primary" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledCard>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
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
          <IconWrapper color={color}>{icon}</IconWrapper>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default MetricCard;
