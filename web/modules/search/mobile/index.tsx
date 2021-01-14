import { useState, useContext} from "react";
import {makeStyles, Box} from "@material-ui/core";
import {MobileLayout} from '../../../layouts/Mobile'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { AppContext } from "../../../src/context/app.context"
import Grey2Typography from "../../../components/Typographies/Grey2Typography";



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    relative: {
      position: "relative"
    },
    filterWrap: {
        position: "relative",
        zIndex: 2,
        borderRadius: "32px 32px 0px 0px",
        paddingTop: "1px",
        backgroundColor: "#FFFFFF"
    }
}))


const MobileSearch = () => {
    const classes = useStyles()
    const [filteredLocation, setFilteredLocation] = useState([])
    const appState = useContext(AppContext);

    const renderLocationText = (item) => {
        const { district , city} = item
        return `
        ${district ? district.name_en + ', ' : ''}
        ${city.name_en}`;
    }
    
    
    const renderListItem = (item) => {
                return (<List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                <ListItemIcon>
                    <img src="/images/SearchLocation/location.svg" alt="location"/> 
                </ListItemIcon>
                <ListItemText primary={renderLocationText(item)} />
                </ListItem>
            </List>
            )
    }
      
    return (
        <Box className={classes.relative}>
            <MobileLayout>
                <Divider />
                <Box className={classes.filterWrap}>
                    <Grey2Typography>
                        Singapore
                    </Grey2Typography>
                    <div className={classes.root}>
                        {
                            appState.locations.length > 0 && (
                                appState.locations.map((item)=> renderListItem(item))
                            )
                        }
                    </div>
                </Box>
            </MobileLayout>
        </Box>
    )
}

export default MobileSearch