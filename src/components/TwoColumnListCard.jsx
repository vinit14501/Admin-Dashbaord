import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Rating,
  styled,
} from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 0),
}));

const TwoColumnListCard = ({
  title,
  items,
  viewAllLink,
  isProductList = false,
}) => {
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
          >
            {title}
          </Typography>
          <Button
            variant="text"
            color="primary"
            href={viewAllLink}
          >
            View All
          </Button>
        </Box>
        <List disablePadding>
          {items.map((item, index) => (
            <StyledListItem
              key={index}
              disableGutters
            >
              <Box
                display="flex"
                alignItems="center"
              >
                {item.icon && (
                  <ListItemIcon>
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.title}
                      sx={{ width: 40, height: 40, marginRight: 2 }}
                    />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.title}
                  secondary={
                    isProductList
                      ? `$${item.price}`
                      : `${item.transactions} transactions`
                  }
                />
              </Box>
              <Box textAlign="right">
                {isProductList ? (
                  <Box>
                    <Rating
                      name={`rating-${index}`}
                      value={item.rating}
                      readOnly
                      size="small"
                    />
                    <Typography
                      variant="caption"
                      display="block"
                    >
                      {item.reviews} reviews
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body2">${item.amount}</Typography>
                )}
              </Box>
            </StyledListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

export default TwoColumnListCard;
