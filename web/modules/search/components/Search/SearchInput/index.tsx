import React, {useContext} from 'react';
import {Box, InputBase, makeStyles, Typography} from "@material-ui/core";
import { AppDispatchContext, AppContext } from "../../../../../src/context/app.context"
import { isMobile } from 'react-device-detect';

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
        paddingLeft: "40px",
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

const SearchInput = () => {
    const classes = useStyles()
    const updateState = useContext(AppDispatchContext);
    const { selectedLocation } = useContext(AppContext);

    const openMobileSearch = ()=>{
        if(isMobile) {
            updateState((oldState)=> {
                return {
                    ...oldState,
                    isMobileSearchActive: !oldState.isMobileSearchActive
            }
            })
        }

    }
    return (
        <Box>
            <Box className={classes.boxLocation}>
                <Typography variant="caption" className={classes.location}>
                    LOCATION
                </Typography>
            </Box>

            <Box mb={5} className={classes.searchBox}>
                <Box className={classes.searchIcon}>
                    <img src="/images/Homepage/SearchIcon.svg" alt="SearchIcon"/>
                </Box>
                <InputBase 
                    classes={{input: classes.input}}
                    fullWidth
                    placeholder="Singapore"
                    onClick={openMobileSearch}
                    value={selectedLocation}
                  />
            </Box>
        </Box>
    )
}

export default SearchInput