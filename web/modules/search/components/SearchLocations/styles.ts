
import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  box: {
    position: "relative",
    margin: "5px 10px 10px",
    padding: "10px 15px",
    borderRadius: "30px",
    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  list: {
    paddingLeft: 20,
  },
  loader: {
    minHeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  noList: {
    color: "#555",
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
