import {Box, InputBase, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    searchBox: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        fontSize: '12px',
        backgroundColor: "#E9E9E9",
        borderRadius: "15px",
        padding: "18px 15px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },

}))

const onChangeInput =(element)=>{
    const value = element.target.value
    console.log(value);
}

const SearchInput = () => {
    const classes = useStyles()
    return (
        <Box>
            <Box mb={5} className={classes.searchBox}>
                <InputBase 
                    classes={{input: classes.input}}
                    fullWidth
                    placeholder="Where do you need space?"
                    onChange={onChangeInput}
                />
            </Box>
        </Box>
    )
}

export default SearchInput