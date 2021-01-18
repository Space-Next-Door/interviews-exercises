import { createStyles, InputBase, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "../../../../components/Modal";
import Space from "./Space";
import FindSpaceHeader from "./FindSpaceHeader";
import useToFindSpace from "../../hooks/useToFindSpace";
import { useState, useContext, useEffect } from "react";
import NoSpaceIsFound from "./NoSpaceIsFound/NoSpaceIsFound";
import { FindSpaceContext } from "../../context";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down("sm")]: {
        margin: "0 0",
      },
    },
  })
);

interface spaceData {
  country: { name_en: string };
  district: { name_en: string } | null;
}

const FindSpace = () => {
  const {
    showFindSpaceModal,
    setShowFindSpaceModal,
    selectedSpace,
  } = useContext(FindSpaceContext);
  const classes = useStyles();
  const [spacesData, setSpacesData] = useState<spaceData[]>([]);
  const { searchSpace } = useToFindSpace();
  const [noSpaceIsPresent, setNoSpaceIsPresent] = useState(false);
  const [searchErr, setSearchErr] = useState<string>();

  const closeFindSpace = () => {
    setShowFindSpaceModal(false);
    clearSpaceData();
  };

  const clearSpaceData = () => {
    setSpacesData([]);
    setNoSpaceIsPresent(false);
  };

  const searchSpaceByText = async (text) => {
    if (text.length > 0) {
      setSearchErr("");
      try {
        const res: any = await searchSpace(text);
        setSpacesData(res.data.locations.edges);
        // noSpaceIsPresent, this component will show only after search result.
        setNoSpaceIsPresent(res.data.locations.edges.length === 0);
      } catch (err) {
        // rarely occur, like server down
        console.log("Search Error", err);
        setSearchErr("Please Try Again Later.");
      }
    } else {
      clearSpaceData();
    }
  };

  useEffect(() => {
    if (selectedSpace) {
      clearSpaceData();
    }
  }, [selectedSpace]);

  return (
    <Modal
      open={!!showFindSpaceModal}
      setOpen={setShowFindSpaceModal}
      fullHeight
      fullWidth
    >
      <Box>
        <FindSpaceHeader
          closeFindSpace={closeFindSpace}
          searchSpaceByText={searchSpaceByText}
        />
      </Box>

      <Box>
        {spacesData &&
          spacesData.map((data, index) => (
            <Space
              key={index}
              countryName={data.country.name_en}
              districtName={data.district ? data.district.name_en : ".."}
              {...data}
            />
          ))}
      </Box>
      <Box>{noSpaceIsPresent && <NoSpaceIsFound />}</Box>
      <Box style={{ margin: "5px auto" }}>
        {searchErr && <Box mt={5}>{searchErr}</Box>}
      </Box>
    </Modal>
  );
};

export default FindSpace;
