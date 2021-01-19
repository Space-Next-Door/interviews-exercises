import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "@apollo/react-hooks";
import { GET_LOCATIONS } from "./queries";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult"
import NoResultFound from "./NoResultFound";
import useStyles from "./styles";

export const SearchLocations = () => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_LOCATIONS, {
    variables: { query: `%${searchTerm}%` },
  });

  const handleChange = (e: any) => {
    const value = e.currentTarget.value;
    /**
     * @TODO - Need to implement debounce to send request once the user stops typing...
    **/
    setSearchTerm(value);
    refetch();
  };

  const renderLoading = () => (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  )

  const renderResults = () => {
    const locations: any = data && data.locations || {};
      
    if (locations && Array.isArray(locations.edges) && locations.edges.length > 0) {
      return locations.edges.map(({ district }, index) => {
        return district && district.name_en ? <SearchResult key={index} name={district.name_en} /> : null;
      });
    }
    return <NoResultFound />
  }

  const handleReload = (e) => {
    e.preventDefault();
    refetch();
  }

  if (error) {
    return <div>Somethin went wrong! <a href="#" onClick={handleReload}>Reload</a></div>
  }

  return (
    <Box className={classes.box}>
      <SearchInput handleChange={handleChange} searchTerm={searchTerm} />
      <Box className={classes.list}>
        {loading && renderLoading()}
        
        {!loading && renderResults()}
      </Box>
    </Box>
  );
};

export default SearchLocations
