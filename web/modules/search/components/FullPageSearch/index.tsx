import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import {
  gql,
  useQuery,
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  useLazyQuery,
} from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "0px",
    left: "0px",
    zIndex: 100,
    maxHeight: "100vh",
    width: "100%",
    backgroundColor: "#FFFFFF",
    overflow: "scroll",
    padding: "5%",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: "12px",
    backgroundColor: "#E9E9E9",
    borderRadius: "15px",
    width: "90%",
    height: "50px",
    "&::placeholder": {
      opacity: "1",
      color: theme.palette.grey[100],
    },
    boxShadow: "none",
  },
  recentSearch: {
    marginBottom: "0px",
  },
  searches: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchName: {
    width: "90%",
  },
}));

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api-dev.spacenextdoor.com/graphql",
});

const GET_COUNTRIES = gql`
  query TestQuery {
    countries(pagination: { limit: 0, skip: 0 }) {
      edges {
        name_en
      }
    }
  }
`;

const GET_LOCATIONS = gql`
  query TestQuery($value: String!) {
    locations(
      where: { country: { _eq: Singapore }, name: { _iLike: $value } }
    ) {
      edges {
        district {
          name_en
        }
      }
    }
  }
`;

const FullPageSearch = ({ fullPageSearch, setFullPageSearch, setLocation }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();

  //   const { loading, error, data } = useQuery(GET_COUNTRIES, { client });
  //   const [abc, { loading, error, data }] = useLazyQuery(GET_COUNTRIES, {
  //     client,
  //   });

  const [abc, { loading, error, data }] = useLazyQuery(GET_LOCATIONS, {
    client,
  });

  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <KeyboardBackspaceIcon
          onClick={() => setFullPageSearch(!fullPageSearch)}
        />
        <SearchBar
          placeholder={"Where do you need space?"}
          className={classes.input}
          value={value}
          searchIcon={<></>}
          onChange={(newValue) => {
            console.log("in onChange");
            setValue(newValue);
            if (newValue) {
              abc({ variables: { value: `%${newValue}%` } });
            } else {
              abc({ variables: { value: `%${null}%` } });
            }
          }}
          onCancelSearch={() => {
            abc({ variables: { value: `%${null}%` } });
            setValue("");
          }}
        />
      </div>

      {(!data || data?.locations?.edges?.length < 1) && (
        <h4 className={classes.recentSearch}>RECENT SEARCHES</h4>
      )}
      <div>
        {data?.locations?.edges?.map(({ district }, index) => (
          <>
            {district?.name_en && (
              <div
                onClick={() => {
                  setLocation(district?.name_en);
                  setFullPageSearch(!fullPageSearch);
                }}
                key={index}
                className={classes.searches}
              >
                <LocationOnOutlinedIcon />
                <p className={classes.searchName}>{district?.name_en}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default FullPageSearch;
