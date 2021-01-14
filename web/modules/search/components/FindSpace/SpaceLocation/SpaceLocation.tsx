import { Box, createStyles, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: 13,
    },
    locationItem: {
      border: `1px solid ${theme.palette.grey[50]}`,
      borderRadius: "10px",
      padding: "10px 15px",
      display: "flex",
      alignItems: "center",
      marginRight: 7,
    },
  })
);

const locations = [{ id: 1, name: "Singapore" }];

const SpaceLocation = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.locationItem}>
        <Box mr={2}>
          <img src="/images/SearchLocation/location.svg" alt="location tag" />
        </Box>
        <Box>Near You</Box>
      </Grid>
      {locations.map((singleLocation) => (
        <Grid key={singleLocation.id} className={classes.locationItem}>
          {singleLocation.name}
        </Grid>
      ))}
    </Grid>
  );
};

export default SpaceLocation;
