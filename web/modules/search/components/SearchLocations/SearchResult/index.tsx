import { makeStyles } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const useStyles = makeStyles(() => ({
  list: {
    margin: "28px 0",
    display: "flex",
    alignItems: "center",
  },
  listIcon: {
    marginRight: 10,
    color: "#777",
    display: "flex",
    alignItems: "center",
  },
  listText: {
    fontSize: "14px",
  },
  
}))

const SearchResult = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <span className={classes.listIcon}>
        <LocationOnOutlinedIcon fontSize="large" />
      </span>
      <p className={classes.listText}>
        {name}
      </p>
    </div>
  )
}

export default SearchResult;
