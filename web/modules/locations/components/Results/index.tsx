import {
  makeStyles,
  Box,
  InputBase,
  IconButton,
  Typography,
} from "@material-ui/core";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  relative: {
    position: "relative",
  },
  resultsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
  },
  resultItem: {
    display: "flex",
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    height: 15,
    width: 15,
    objectFit: "contain",
    marginRight: 10,
  },
}));

const Results = ({ results }) => {
  const classes = useStyles();

  return (
    <Box className={classes.relative}>
      {results.map((r, i) => (
        <Box className={classes.resultItem} key={i}>
          <img
            src="/images/Locations/flag.png"
            alt="background image"
            className={classes.flag}
          />
          <Typography variant={"body2"}>{`${
            r?.district?.name_en ? r?.district?.name_en + "," : ""
          } ${r.country.name_en}`}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export { Results };
