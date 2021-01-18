import {makeStyles } from "@material-ui/core";



export const MainStyles = makeStyles(theme => ({
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
        padding: '0px 18px 40px 18px',
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


export const InputStyles = makeStyles(theme=>({
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
        padding: "18px 40px 18px 15px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },
    closeIcon: {
        height: '15px',
        width: '15px',
        position: 'absolute',
        top: '28px',
        left: '90vw'

    },

}))