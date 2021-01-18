import {makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    relative: {
      position: "relative",
      backgroundColor: "#FFFFFF"
    },
    listContiner: {
        position: "relative",
    },
    notFoundImageContiner: {
        margin: 'auto',
        width: '50%',
        padding: '20px 10px'
    },
    notFounHeadingText: {
        textAlign: 'center',
        paddingBottom: '40px',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '20px'
    },
    notFoundText: {
        textAlign: 'center',
        padding: '0px 20px 40px 20px',
        fontSize: '14px',
        lineHeight: '20px'
    },
    textContainer: {
        margin: 'auto',
        width: '80%',
    },
    contactUsText: {
        textDecoration: 'none',
        color: '#007FAF',
    },
    
}))
export default useStyles 