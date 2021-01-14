import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box, InputBase } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   dialog:{

   },

     searchBox: {
        position: "relative",
        margin: "4px 0 10px"
    },
    input: {
        fontSize: '12px',
        backgroundColor: "#E9E9E9",
        borderRadius: "15px",
        padding: "18px 15px",
        paddingLeft: "50px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },
      searchIcon: {
        position: "absolute",
        left: "17px",
        top: "16px",
        zIndex: 2,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      
      }
  }),
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const { open, handleClose, handleOnChange, result, resultError,handleOnClick } = props

  return (
    <div>
     
      <Dialog className={classes.dialog} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Box className={classes.container}>
          <Button  onClick={handleClose} >
            <ArrowBackIcon style={{
              width: '30px', height: '40px', marginRight: '10px' }}/>
            </Button>
            <Box mb={5} className={classes.searchBox}>
                <Box className={classes.searchIcon}>
                    <img src="/images/Homepage/SearchIcon.svg" alt="SearchIcon"/>
                </Box>
                <InputBase classes={{input: classes.input}} name='search' onChange={handleOnChange} fullWidth placeholder="Singapore"/>
          </Box>
          </Box>
          
        <List>
          {
            resultError && (<ListItem >
              <ListItemText primary="no data found"/>
          </ListItem>)
          }
          {result && result.map((item, index) => {
            return(
            <ListItem key={index} button onClick={()=>{handleOnClick(item.district.name_en)}}>
            <LocationOnOutlinedIcon/>
            <ListItemText primary={item.district.name_en}  />
          </ListItem>
          )})}
          </List>
          
      </Dialog>
    </div>
  );
}
