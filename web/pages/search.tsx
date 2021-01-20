import { makeStyles, Box } from "@material-ui/core";
import { HomeLayout } from "../layouts/MainLayout";
import Header from "../modules/search/components/Header";
import SearchLocation from "../modules/search/components/Search";
import Map from "../modules/search/components/Map";
import ViewOnMap from "../modules/search/components/ViewOnMap";
import Filter from "../modules/search/components/Filter";
import BestOption from "../modules/search/components/BestOption";
import Items from "../modules/search/components/Items";
import AveragePrices from "../modules/search/components/AveragePrices";
import FilterPage from "../modules/search/components/FilterPage";
import FullPageSearch from "../modules/search/components/FullPageSearch";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  relative: {
    position: "relative",
  },
  filterWrap: {
    position: "relative",
    zIndex: 2,
    borderRadius: "32px 32px 0px 0px",
    paddingTop: "1px",
    backgroundColor: "#FFFFFF",
  },
  line: {
    display: "flex",
    justifyContent: "center",
    margin: "10px auto 20px",
    maxWidth: "60px",
    border: `2px solid ${theme.palette.grey[50]}`,
    borderRadius: "10px",
  },
}));

const Search = () => {
  const [hidden, setHidden] = useState(false);
  const [fullPageSearch, setFullPageSearch] = useState(false);
  const [location, setLocation] = useState("");

  console.log("location updated", location);

  const classes = useStyles();
  return (
    <Box className={classes.relative}>
      {!fullPageSearch ? (
        <HomeLayout>
          <Header />
          <SearchLocation
            location={location}
            fullPageSearch={fullPageSearch}
            setFullPageSearch={setFullPageSearch}
          />
          <Map />
          <Box className={classes.filterWrap}>
            <ViewOnMap />
            <Box className={classes.line}></Box>
            <Filter hidden={hidden} setHidden={setHidden} />
            <BestOption />
            <Items />
            <AveragePrices />
          </Box>
        </HomeLayout>
      ) : (
        <FullPageSearch
          setLocation={setLocation}
          fullPageSearch={fullPageSearch}
          setFullPageSearch={setFullPageSearch}
        />
      )}
      <FilterPage hidden={hidden} setHidden={setHidden} />
    </Box>
  );
};

export default Search;
