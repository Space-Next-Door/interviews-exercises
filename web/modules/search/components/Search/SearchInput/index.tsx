import { useState } from "react";
import { Box, InputBase, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxLocation: {
    paddingLeft: "6px",
  },
  location: {
    fontWeight: 600,
  },
  searchBox: {
    position: "relative",
    margin: "4px 0 10px",
  },
  input: {
    fontSize: "12px",
    backgroundColor: "#E9E9E9",
    borderRadius: "15px",
    padding: "18px 15px",
    paddingLeft: "50px",
    "&::placeholder": {
      opacity: "1",
      color: theme.palette.grey[100],
    },
  },
  searchIcon: {
    position: "absolute",
    left: "17px",
    top: "16px",
    zIndex: 2,
  },
}));

const SearchInput = ({ fullPageSearch, setFullPageSearch, location }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.boxLocation}>
        <Typography variant="caption" className={classes.location}>
          LOCATION
        </Typography>
      </Box>

      <Box mb={5} className={classes.searchBox}>
        <Box className={classes.searchIcon}>
          <img src="/images/Homepage/SearchIcon.svg" alt="SearchIcon" />
        </Box>
        <InputBase
          onClick={() => setFullPageSearch(!fullPageSearch)}
          classes={{ input: classes.input }}
          fullWidth
          value={location}
          placeholder="Singapore"
        />
      </Box>
    </Box>
  );
};

export default SearchInput;
