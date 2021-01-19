import { makeStyles, Box, InputBase, IconButton } from "@material-ui/core";

import { useState } from "react";
import { SearchBar, Pills, NoResults, Results } from "../modules/locations";
const useStyles = makeStyles((theme) => ({
  relative: {
    position: "relative",
  },
}));

const Locations = () => {
  const classes = useStyles();

  const [results, setResults] = useState(null);

  return (
    <Box className={classes.relative}>
      <SearchBar results={results} setResults={setResults} />
      <Pills />
      {results ? (
        results.length > 0 ? (
          <Results results={results} />
        ) : (
          <NoResults />
        )
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Locations;
