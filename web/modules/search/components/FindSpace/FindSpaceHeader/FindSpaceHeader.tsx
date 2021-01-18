import {
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import SpaceLocation from "../SpaceLocation";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    inputDiv: {
      backgroundColor: theme.palette.grey[50],
      borderRadius: "15px",
      display: "flex",

      marginTop: 5,
      paddingRight: 10,
    },
    input: {
      fontSize: "12px",
      backgroundColor: theme.palette.grey[50],
      borderRadius: "15px",
      padding: "18px 10px",
      paddingLeft: "30px",
      "&::placeholder": {
        opacity: "1",
        color: theme.palette.grey[100],
      },
    },
  })
);

const FindSpaceHeader = (props: {
  closeFindSpace: Function;
  searchSpaceByText: Function;
}) => {
  const classes = useStyles();
  const { closeFindSpace, searchSpaceByText } = props;
  const [searchSpace, setSearchSpace] = useState("");
  const [showReset, setShowReset] = useState(false);

  const resetSearch = () => {
    setSearchSpace("");
    searchSpaceByText("");
    setShowReset(false);
  };

  const onChange = (e: React.ChangeEvent<{ value: string }>) => {
    if (e.target.value.length > 0) {
      setShowReset(true);
    } else {
      setShowReset(false);
    }
    setSearchSpace(e.target.value);
    searchSpaceByText(e.target.value);
  };
  return (
    <Grid item container justify="center" className={classes.root}>
      <Grid
        item
        onClick={() => closeFindSpace()}
        style={{ marginTop: 15 }}
        xs={1}
        sm={1}
        lg={1}
        xl={1}
      >
        <img src="/images/SearchLocation/left_arrow.svg" />
      </Grid>

      <Grid item xs={11} sm={11} lg={11} xl={11}>
        <Grid container direction="column">
          {/* contain search box and spaceLocationComponent in a column */}
          <Grid item className={classes.inputDiv}>
            <InputBase
              classes={{ input: classes.input }}
              fullWidth
              placeholder="Where do you need space?"
              value={searchSpace}
              onChange={onChange}
            />
            {showReset && (
              <IconButton onClick={resetSearch}>
                <img src="/images/SearchLocation/close.svg" />
              </IconButton>
            )}
          </Grid>
          <Grid item>
            <SpaceLocation />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FindSpaceHeader;
