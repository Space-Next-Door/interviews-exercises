import React from "react"
import {AppBar, IconButton, makeStyles, Box} from "@material-ui/core";
import SearchInput from "./input";


const useStyles = makeStyles({
    root: {
        height: 71,
        boxShadow: '0px 15px 40px #E9E9E9',
        backgroundColor: '#FFFFFF',
        display: '-webkit-inline-box',
        padding: '0px 10px'
    },
    backButton: {
        padding: '0px 5px',
        display: 'flex',
        alignItems: 'center'
    },
    backIcon: {
        height: '30%',
        width: 'auto',

    },
})

type Props = {
    children: React.ReactNode
    className?: string
}

export const HomeLayout = (props: Props) => {

    const classes = useStyles()
    const {children} = props
    return (
        <React.Fragment>
            <AppBar className={classes.root} position="static">
                <Box className={classes.backButton}>
                    <img className={classes.backIcon} src="/images/MobileSearch/backIcon.svg" alt="menu"/>
                </Box>
                <Box className={classes.backButton}>
                    <SearchInput />
                </Box>
                
            </AppBar>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}
