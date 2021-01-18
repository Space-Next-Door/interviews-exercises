import { useContext} from "react";
import { Box} from "@material-ui/core";
import {MobileLayout} from '../../../../layouts/Mobile'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AppContext } from "../../../../src/context/app.context"
import UseStyles from "../../../../src/styles/searchMobileView"


const MobileSearch = () => {
    const classes = UseStyles()
    const appState = useContext(AppContext);

    const renderLocationText = (item) => {
        const { district , city} = item
        return `
        ${district ? district.name_en + ', ' : ''}
        ${city.name_en}`;
    }
    
    
    const renderListItem = (item,index) => {
                return (<List component="nav" aria-label="main mailbox folders" key={index}>
                <ListItem button>
                <ListItemIcon>
                   <img src="/images/SearchLocation/location.svg" alt="location"/> 
                </ListItemIcon>
                <ListItemText primary={renderLocationText(item)} />
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
                        <a href={'javascript:void(0)'} className={classes.contactUsText}> contact us </a>
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