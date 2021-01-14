import { Grid } from "@material-ui/core";
import Grey2Typography from "../../../../../components/Typographies/Grey2Typography";
import Grey3Typography from "../../../../../components/Typographies/Grey3Typography";
import { FindSpaceContext } from "../../../context";
import { useContext } from "react";

interface propsType {
  districtName: string;
  countryName: string;
}

const Space = (props: propsType) => {
  const { setSelectedSpace, setShowFindSpaceModal } = useContext(
    FindSpaceContext
  );

  const setSelectedSpaceOnClick = () => {
    // pass all the data in it
    setSelectedSpace(props);
    setShowFindSpaceModal(false);
  };

  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: 20 }}
      alignItems="center"
      spacing={3}
      onClick={setSelectedSpaceOnClick}
    >
      <Grid item>
        <img src="/images/SearchLocation/location.svg" alt="Location Tag" />
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={11}
        sm={11}
        lg={11}
        xl={11}
        style={{ paddingLeft: 20 }}
      >
        <Grid item style={{ width: "100%" }}>
          <Grey3Typography noWrap> {props.districtName}</Grey3Typography>
        </Grid>
        <Grid item>
          <Grey2Typography>{props.countryName}</Grey2Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Space;
