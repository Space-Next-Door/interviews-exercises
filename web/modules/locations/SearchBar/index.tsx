import { makeStyles, Box, InputBase, IconButton } from "@material-ui/core";

import { useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
const client = new ApolloClient({
  uri: "https://api-dev.spacenextdoor.com/graphql",
  cache: new InMemoryCache(),
});

const useStyles = makeStyles((theme) => ({
  inputForm: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  searchInput: {
    display: "flex",
    flex: 1,
    padding: 15,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginRight: 26,
    backgroundColor: theme.palette.grey[50],
    height: 50,
    borderRadius: 15,
  },
  closeIcon: {
    height: 15,
    width: 15,
    objectFit: "contain",
  },
  arrow_back: {
    height: 15,
    width: 15,
    objectFit: "contain",
  },
}));

const SearchBar = ({ results, setResults }) => {
  const [hidden, setHidden] = useState(false);
  const classes = useStyles();
  const [value, setValue] = useState("");
  const onChange = async (event) => {
    try {
      setValue(event.target.value);
      if (event.target.value.length < 1) return setResults(null);
      let queryResults = await client.query({
        query: gql`
          query myQuery {
            locations(
              where: {
                country: { _eq: Singapore }
                name: { _iLike: "%${event.target.value}%" }
              }
            ) {
              edges {
                country {
                  id
                  name_en
                }
                city {
                  id
                  name_en
                }
                district {
                  name_en
                }
              }
            }
          }
        `,
        variables: {
          query: event.target.value,
        },
      });
      setResults(queryResults.data.locations.edges);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={classes.inputForm} noValidate autoComplete="off">
      <Link href={"/"}>
        <IconButton>
          <img
            src="/images/Locations/arrow_back.png"
            alt="background image"
            className={classes.arrow_back}
          />
        </IconButton>
      </Link>
      <Box className={classes.inputContainer}>
        <InputBase
          id="outlined-basic"
          className={classes.searchInput}
          onChange={onChange}
          value={value}
        />
        <IconButton
          onClick={() => {
            setResults(null);
            setValue("");
          }}
        >
          <img
            src="/images/Locations/close.png"
            alt="background image"
            className={classes.closeIcon}
          />
        </IconButton>
      </Box>
    </form>
  );
};

export { SearchBar };
