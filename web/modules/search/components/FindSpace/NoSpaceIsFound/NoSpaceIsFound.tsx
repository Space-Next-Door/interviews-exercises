import { Grid } from "@material-ui/core";
import Grey3Typography from "../../../../../components/Typographies/Grey3Typography";
import Grey2Typography from "../../../../../components/Typographies/Grey2Typography";

const NoSpaceIsFound = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      style={{
        height: "50vh",
        width: "60%",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <Grid item>
        <Grey3Typography style={{ fontWeight: 800 }}>
          We can't find any locations facilities that match your search
        </Grey3Typography>
      </Grid>
      <Grid item>
        <Grey2Typography>
          You can try by changing your search. Or contact us to help you to
          compare unit based on price, location and size
        </Grey2Typography>
      </Grid>
    </Grid>
  );
};

export default NoSpaceIsFound;
