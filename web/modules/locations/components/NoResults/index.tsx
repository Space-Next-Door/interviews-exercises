import {
  makeStyles,
  Box,
  InputBase,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  relative: {
    position: "relative",
  },
  imageContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noResultImage: {
    display: "flex",
    alignSelf: "center",
    height: 200,
    width: 200,
    objectFit: "contain",
  },
  noResultHeading: {
    margin: "0px 34px 0 34px",
    textAlign: "center",
  },
  noResultText: {
    margin: "35px 34px 0 34px",
    textAlign: "center",
  },
  contactUs: {
    color: theme.palette.primary["main"],
  },
}));

const NoResults = () => {
  const [hidden, setHidden] = useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.relative}>
      <Box className={classes.imageContainer}>
        <img
          src="/images/Locations/no_locations.png"
          alt="background image"
          className={classes.noResultImage}
        />
      </Box>
      <Typography variant={"h3"} className={classes.noResultHeading}>
        We cant find any locations that match your search
      </Typography>
      <Typography variant={"body2"} className={classes.noResultText}>
        You can try changing your location Or{" "}
        <span className={classes.contactUs}>contact us</span> for more
        information.
      </Typography>
    </Box>
  );
};

export { NoResults };
