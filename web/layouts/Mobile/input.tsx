import {useContext, useEffect} from "react";
import {Box, InputBase, makeStyles, Typography} from "@material-ui/core";
import UseLocation from "../../src/customHooks/useLocation";
import { AppDispatchContext } from "../../src/context/app.context"

const useStyles = makeStyles(theme=>({
    searchBox: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        fontSize: '12px',
        backgroundColor: "#E9E9E9",
        borderRadius: "15px",
        padding: "18px 15px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },

}))



const SearchInput = () => {
    const classes = useStyles()
    const { locationState, getLocations } = UseLocation()
    const updateState = useContext(AppDispatchContext);


    useEffect(() => {
        if (locationState) {
            updateState((oldState)=> {
            return {
                ...oldState,
                locations: locationState.data
            }
            })
            
        }
      }, [locationState])

    const onChangeInput =(element, getLocations)=>{
        const value = element.target.value
        getLocations({
            name: `%${value}%`,
            country: 'Singapore'
        })
    }

    return (
        <Box>
            <Box mb={5} className={classes.searchBox}>
                <InputBase 
                    classes={{input: classes.input}}
                    fullWidth
                    placeholder="Where do you need space?"
                    onChange={(el)=> onChangeInput(el,getLocations)}
                />
            </Box>
        </Box>
    )
}

export default SearchInput