
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  search__panel: {
    display: "flex",
    alignItems: "center",
  },
  backButton: {
    width: "13%",
  },
  searchBox: {
    position: "relative",
    margin: "4px 0 10px",
    width: "87%",
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
