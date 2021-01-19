import {
  Box,
  Divider,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Dates from "./Dates";
import SearchInput from "./SearchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "5px 10px 10px",
    padding: "10px 15px",
    borderRadius: "30px",
    boxShadow: "0px 15px 40px 0px rgba(233, 233, 233, 1)",
    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
}));

const Search = () => {
  const classes = useStyles();
  const router = useRouter();
  const gotoSearchLocation = () => {
    router.push("/search-location");
  };
  return (
    <Box className={classes.root}>
      <SearchInput onClick={gotoSearchLocation} />

      <Divider />
      <Dates />
    </Box>
  );
};

export default Search;
