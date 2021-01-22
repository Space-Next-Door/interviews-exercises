import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {},
  logoBox: {
    marginTop: 30,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    margin: "30px 0",
  },
});

export const NotFound = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Box>
      <Box className={classes.logoBox}>
        <img src="/images/SearchLocation/notFound.svg" alt="" />
      </Box>
      <Typography variant="h3" gutterBottom className={classes.text}>
        We cant find any locations that match your search
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.text}>
        You can try changing your location Or{" "}
        <Link href="#" onClick={preventDefault}>
          contact us
        </Link>{" "}
        for more information.
      </Typography>
    </Box>
  );
};
