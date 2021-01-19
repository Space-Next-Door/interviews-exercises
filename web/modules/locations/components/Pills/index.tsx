import {
  makeStyles,
  Box,
  InputBase,
  IconButton,
  Typography,
} from "@material-ui/core";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  pillsContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    marginLeft: 42,
  },
  pillItem: {
    display: "flex",
    border: `1px solid ${theme.palette.grey[50]}`,
    alignItems: "center",
    paddingTop: 8,
    padding: "8px 12px 8px 12px",
    borderRadius: 11,
    marginRight: 9,
  },
  pillText: {
    color: "#9E9E9E",
  },
  pillImage: {
    height: 16,
    width: 16,
    objectFit: "contain",
    marginRight: 11,
  },
}));

const Pills = () => {
  const [hidden, setHidden] = useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.pillsContainer}>
      <Box className={classes.pillItem}>
        <img
          src="/images/Locations/flag.png"
          alt="background image"
          className={classes.pillImage}
        />
        <Typography className={classes.pillText} variant="body2">
          Near You
        </Typography>
      </Box>
      <Box className={classes.pillItem}>
        <Typography className={classes.pillText} variant="body2">
          Singapore
        </Typography>
      </Box>
    </Box>
  );
};

export { Pills };
