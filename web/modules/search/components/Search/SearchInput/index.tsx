import { Box, InputBase, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react"
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import FullScreenDialog from '../SearchInput/searchModal'
import { useMediaQuery } from 'react-responsive';


const useStyles = makeStyles(theme=>({
    boxLocation: {
      paddingLeft: "6px"
    },
    location: {
        fontWeight: 600
    },
    searchBox: {
        position: "relative",
        margin: "4px 0 10px"
    },
    input: {
        fontSize: '12px',
        backgroundColor: "#E9E9E9",
        borderRadius: "15px",
        padding: "18px 15px",
        paddingLeft: "50px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },
    searchIcon: {
        position: "absolute",
        left: "17px",
        top: "16px",
        zIndex: 2,
    },

}))

    
const fetchDataFromGQL = async(event) => {
    const client = new ApolloClient({
        uri: 'https://api-dev.spacenextdoor.com/graphql',
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
            query: gql`
                query {
            locations(where: {
                country:{
                _eq:${event.target.value}
                },
                name: {
                _like: "%d%"
                }
            }) {
                edges {
                country {
                    id
                    name_en
                }
                city {
                    id
                }
                district {
                    name_en
                }
                }
            }
            }
            `
});
    return data
}

const SearchInput = () => {
    const [input, setinput] = useState('')
    const [result, setResult] = useState()
    const [resultError, setResultError] = useState(false)
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setResultError(false)
        setResult(null)
    };
      const handleOnClick = (value) => {
          setinput( value )
          setOpen(false)
            setResultError(false)
            setResult(null)
  }
    const handleOnChange = async (event) => {

        if (event.target.value == '' || event.target.value == undefined || event.target.value == null) {
                setResult(null)
                setResultError(false)
        } else {
            
            try {
                const data = await fetchDataFromGQL(event)
                setResultError(false)
                setResult(data.locations.edges)
                if (data.locations.edges.length === 0 ) {
                setResultError(true)
                }
            }
            catch (e) {
                setResult(null)
                setResultError(true)
            }
               
            }
        }
       
    const classes = useStyles()
    return (
        <div>
        <Box>
            <Box className={classes.boxLocation}>
                <Typography variant="caption" className={classes.location}>
                    LOCATION
                </Typography>
            </Box>

            <Box mb={5} className={classes.searchBox} onClick={isMobile ? handleClickOpen : null}>
                <Box className={classes.searchIcon}>
                    <img src="/images/Homepage/SearchIcon.svg" alt="SearchIcon"/>
                </Box>
                <InputBase classes={{input: classes.input}} name='search' value={input} onChange={handleOnChange} fullWidth placeholder="Singapore"/>
            </Box>
        </Box>
            <FullScreenDialog open={open} handleClose={handleClose} handleOnChange={handleOnChange} handleOnClick={handleOnClick} result={result} resultError={ resultError}/>
            </div>
    )
}

export default SearchInput