import { useState, useContext} from "react";
import {makeStyles, Box} from "@material-ui/core";
import {MobileLayout} from '../../../../layouts/Mobile'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { AppContext } from "../../../../src/context/app.context"



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,

    },
    relative: {
      position: "relative",
      backgroundColor: "#FFFFFF"
    },
    filterWrap: {
        position: "relative",
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
      
    return (
        <Box className={classes.relative}>
            <MobileLayout>
                <Divider />
                <Box className={classes.filterWrap}>
                
                    <div className={classes.root}>
                        {
                            appState.locations.length > 0 && (
                                appState.locations.map((item,index)=> renderListItem(item,index))
                            )
                        }
                    </div>
                </Box>
            </MobileLayout>
        </Box>
    )
}

export default MobileSearch