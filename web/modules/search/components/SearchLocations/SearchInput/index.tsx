import { Box, InputBase } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useRouter } from "next/router";
import {useStyles} from "./styles";

const SearchInput = ({ handleChange, searchTerm }) => {
  const classes = useStyles();
  const router = useRouter();

  const onBack = () => {
    router.push("/search");
  };

  return (
    <Box className={classes.search__panel}>
      <Box className={classes.backButton}>
        <KeyboardBackspaceIcon onClick={onBack} fontSize={"large"} />
      </Box>
      <Box mb={5} className={classes.searchBox}>
        <Box className={classes.searchIcon}>
          <img src="/images/Homepage/SearchIcon.svg" alt="SearchIcon" />
        </Box>
        <InputBase
          classes={{ input: classes.input }}
          fullWidth
          placeholder="Where do you need space?"
          autoFocus
          value={searchTerm}
          onChange={handleChange}
        />
      </Box>
    </Box>
  )
}

export default SearchInput;