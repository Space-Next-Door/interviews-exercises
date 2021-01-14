import {makeStyles, Box} from "@material-ui/core";
import {HomeLayout} from './header'
import SearchLocation from "../components/Search";
import Map from "../components/Map";
import {useState} from "react";


const useStyles = makeStyles(theme => ({
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



const Search = () => {
    const [hidden, setHidden] = useState(false)
    const classes = useStyles()
    return (
        <Box className={classes.relative}>
            <HomeLayout>
                <Box className={classes.filterWrap}>
                    
                </Box>
            </HomeLayout>
        </Box>
    )
}

export default Search