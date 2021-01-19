import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    padding: "0 15px",
    textAlign: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "20px",
    textAlign: "center",
    color: "#3A3335",
  },
  para: {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.5px",
    color: "#333333",
    padding: "0 15px",
  }
})

const NoResultFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <img src="/images/SearchLocation/empty-location.svg"/>
      <h3 className={classes.title}>We can't find any locations facilities that match your search</h3>
      <p className={classes.para}>You can try changing your search, Or contact us to help you compare units based price, location, size, and more.</p>
    </div>
  )
}

export default NoResultFound;
