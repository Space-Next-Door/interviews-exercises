import {useContext, useEffect, useState} from "react";
import {Box, InputBase, makeStyles, Typography} from "@material-ui/core";
import UseLocation from "../../src/customHooks/useLocation";
import { AppDispatchContext, AppContext } from "../../src/context/app.context"

const useStyles = makeStyles(theme=>({
    searchBox: {
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        fontSize: '12px',
        width: '70vw',
        backgroundColor: "#E9E9E9",
        borderRadius: "15px",
        marginTop: '10px',
        padding: "18px 15px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },
    backIcon: {
        height: '15px',
        width: '15px',
        position: 'absolute',
        top: '30px',
        left: '80vw'

    },

}))

type Props = {
    updateComponent: boolean
}

const SearchInput = (props: Props) => {
    const {updateComponent} = props
    const classes = useStyles()
    const { locationState, getLocations } = UseLocation()
    const updateState = useContext(AppDispatchContext);
    const { selectedCountry } = useContext(AppContext);
    const [inputText, setInputText] = useState('');


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

    useEffect(() => {
        onChangeInput(inputText)
    }, [updateComponent])

    const onChangeInput =(value)=>{
        setInputText(value)
        getLocations({
            name: `%${value}%`,
            country: selectedCountry
        })
    }

    return (
        <Box>
            <Box mb={5} className={classes.searchBox}>
                <InputBase 
                    classes={{input: classes.input}}
                    fullWidth
                    placeholder="Where do you need space?"
                    onChange={(el)=> onChangeInput(el.target.value)}
                    value={inputText}
                />
                    <img 
                        className={classes.backIcon}
                        src="/images/MobileSearch/close.svg"
                        alt="close"
                        onClick={()=> onChangeInput('')}
                    />

            </Box>
        </Box>
    )
}

export default SearchInput