import {
  Box,
  Divider,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Dates from "./Dates";
import SearchInput from "./SearchInput";
import { useState } from "react";
import FindSpace from "../FindSpace";
import { FindSpaceContext, useToUpdateContext } from "../../context";

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
  const {
    showFindSpaceModal,
    setShowFindSpaceModal,
    selectedSpace,
    setSelectedSpace,
  } = useToUpdateContext();

  return (
    <Box className={classes.root}>
      <FindSpaceContext.Provider
        value={{
          showFindSpaceModal,
          setShowFindSpaceModal,
          selectedSpace,
          setSelectedSpace,
        }}
      >
        <SearchInput />
        <Divider />
        <Dates />
        <FindSpace />
      </FindSpaceContext.Provider>
    </Box>
  );
};

export default Search;
