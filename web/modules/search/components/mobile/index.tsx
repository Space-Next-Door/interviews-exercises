import { useContext} from "react";
import { Box} from "@material-ui/core";
import {MobileLayout} from '../../../../layouts/Mobile'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AppContext, AppDispatchContext } from "../../../../src/context/app.context"
import { MainStyles } from "../../../../src/styles/searchMobileView" 


const MobileSearch = () => {
    const classes = MainStyles()
    const appState = useContext(AppContext);
    const updateState = useContext(AppDispatchContext);

    const renderLocationText = (item) => {
        const { district , city} = item
        let text = `
        ${district ? district.name_en + ', ' : ''}
        ${city.name_en}`;
        return text.replaceAll('  ',' ')
    }
    
    
    const renderListItem = (item,index) => {
        const fullLocation =  renderLocationText(item)
        return (<List
            component="nav"
            aria-label="main mailbox folders"
            key={index}
            onClick={()=> updateState((oldState)=> {
                return {
                    ...oldState,
                    selectedLocation:  fullLocation,
                    isMobileSearchActive: false
                }
                })}
            >
            <ListItem button>
            <ListItemIcon className={classes.mapPointerIconContainer}>
                <img src="/images/SearchLocation/location.svg" alt="location"/> 
            </ListItemIcon>
            <ListItemText primary={fullLocation} />
            </ListItem>
        </List>
        )
    }

    const renderNotFoundSection = () => {
        if(appState.locations.length === 0 && appState.locationInputText){
            return (<>
                <Grid item className={classes.notFoundImageContiner}>
                    <img 
                    src="/images/MobileSearch/not-found.svg"
                    alt="notfound"
                    />
                </Grid>
                <Grid className={classes.textContainer}>
                    <div className={classes.notFounHeadingText}>
                        We cant find any locations that match your search
                    </div>
                </Grid>
                <Grid className={classes.textContainer}>
                    <div className={classes.notFoundText}>
                        You can try changing your location Or 
                        <a href={'#'} className={classes.contactUsText}> contact us </a>
                        for more information.
                    </div>
                </Grid>
            </>
            )
        }
}
      
    return (
        <Box className={classes.relative}>
            <MobileLayout>
                <Grid className={classes.listContiner}>
                    <div className={classes.root}>
                        {
                            appState.locations.length > 0 && (
                                appState.locations.map((item,index)=> renderListItem(item,index))
                            )
                        }
                    </div>
                </Grid>
                {renderNotFoundSection()}

               
            </MobileLayout>
        </Box>
    )
}

export default MobileSearch