import {useContext, useEffect, useState} from "react";
import {Box, InputBase } from "@material-ui/core";
import UseLocation from "../../src/customHooks/useLocation";
import { AppDispatchContext, AppContext } from "../../src/context/app.context"
import { InputStyles } from "../../src/styles/searchMobileView"

type Props = {
    updateComponent: boolean
}

const SearchInput = (props: Props) => {
    const {updateComponent} = props
    const classes = InputStyles()
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
        updateState((oldState)=> {
            return {
                ...oldState,
                locationInputText: value
            }
        })
        if(selectedCountry){
                getLocations({
                    name: `%${value}%`,
                    country: selectedCountry
                })
        }
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
                        className={classes.closeIcon}
                        src="/images/MobileSearch/close.svg"
                        alt="close"
                        onClick={()=> onChangeInput('')}
                    />

            </Box>
        </Box>
    )
}

export default SearchInput