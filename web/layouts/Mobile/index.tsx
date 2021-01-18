import React,{ useContext, useEffect, useState} from "react"
import {AppBar, makeStyles, Box, Button} from "@material-ui/core";
import SearchInput from "./input";
import { AppDispatchContext , AppContext} from "../../src/context/app.context"
import Grey2Typography from "../../components/Typographies/Grey2Typography";
import useCountries from "../../src/customHooks/useCountries";

const useStyles = makeStyles({
    root: {
        height: 71,
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        display: '-webkit-inline-box',
        padding: '0px 10px',
    },
    backButton: {
        padding: '0px 5px',
        display: 'flex',
        alignItems: 'center'
    },
    backIcon: {
        height: '20px',
        width: '20px',

    },
    countryCollection: {
        display: 'flex',
        overflowX: 'scroll',
        overflowY: 'hidden',
        paddingLeft: '40px'

    },
    countryText: {
        fontSize: '9px',
        borderRadius: '5px',
        paddingLeft: '8px'
    },
    countryBtn: {
        margin: '5px',
        minWidth: '100px',
        borderRadius: '20px'
    }
})


type Props = {
    children: React.ReactNode
    className?: string
}

export const MobileLayout = (props: Props) => {
    const {children} = props
    const classes = useStyles()
    const { countries } = useCountries()
    const updateState = useContext(AppDispatchContext);
    const { selectedCountry } = useContext(AppContext);
    const [childState, setChildState] = useState(true);

    useEffect(() => {
        if (countries.length > 0) {
            updateState((oldState)=> {
            return {
                ...oldState,
                selectedCountry:  countries[0].name_en
            }
            })
            
        }
      }, [countries])

      const resetCountries =(name)=>{
        updateState((oldState)=> {
            return {
                ...oldState,
                selectedCountry:  name
            }
        })
        setChildState(!childState)
      }

    const renderCountries =()=>{
        if(countries.length > 0) {
           return countries.map((item,index)=>{
               const {name_en} = item
                return(
                    <Button size="medium" 
                        className={classes.countryBtn}
                        variant="outlined"
                        onClick={()=> resetCountries(name_en)}
                        key={index}
                    >
                        {
                            selectedCountry === name_en &&
                            <img src="/images/SearchLocation/location.svg" alt="location"/> 
                        }
                        <Grey2Typography className={classes.countryText}>
                            {name_en}
                        </Grey2Typography>
                    </Button>
                )
            })
        }
    }
    
    return (
        <>
            <AppBar className={classes.root} position="static">
                <Box className={classes.backButton} 
                onClick={()=> updateState((oldState)=> {
                    return {
                        ...oldState,
                        isMobileSearchActive: !oldState.isMobileSearchActive
                    }
                    })
                }
                >
                    <img className={classes.backIcon} src="/images/MobileSearch/backIcon.svg" alt="menu"/>
                </Box>
                <Box className={classes.backButton}>
                    <SearchInput updateComponent={childState}/>
                </Box>
            </AppBar>

            <div className={classes.countryCollection}>
                {renderCountries()}
            </div>
            <main>
                {children}
            </main>
        </>
    )
}
