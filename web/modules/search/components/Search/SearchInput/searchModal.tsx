import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box, InputBase,Divider,Button } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
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
        padding: "18px 35px",
        // paddingLeft: "50px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },
      searchIcon: {
        position: "absolute",
        left: "260px",
        top: "16px",
        zIndex: 2,
    },
    container: {
      height: '71px',
      boxShadow: 'none',
      backgroundColor: ' #FFFFFF',
      display: 'flex',
      float:'left',
      alignItems:'center',
      padding:'0 5px'

      
    },
    subcontainer: {
      alignItems: 'center',
    },
    divider: {
      marginTop:10,
    },
    options: {
      display: 'flex',
      padding: '20px',
      overflowX: 'scroll',
      overflowY:'hidden'
    },
    options_button: {
      marginRight: '5px',
      minWidth: '100px',
      padding: '5px 15px',
      minHeight: 30
    },
    arrow: {
      height: 30,
      width: 30,
      marginLeft: 5,
      marginRight: 5
    },
    resultArea: {
      overflowY: 'scroll',
      paddingTop: '18px',
      paddingBottom: '8px',
      maxWidth: '300px',

      transform: 'scale(1.1, 1.1)',
      overflowX: 'hidden',


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
  const { open, handleClose, handleOnChange, result, resultError, handleOnClick } = props
  const button = ['Singapore','japan','thailand','china','pakistan']

  return (
    <div>
     
      <Dialog className={classes.dialog} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <div>
        <Box className={classes.container}>
            <ArrowBackIcon className={classes.arrow} onClick={handleClose} />
            <Box mb={5} className={classes.searchBox}>
                <Box className={classes.searchIcon}>
              <CancelOutlinedIcon style={{height:20,width:20}}/>
                </Box>
                <InputBase classes={{input: classes.input}} name='search'  onChange={handleOnChange} fullWidth placeholder="Where do you need space?"/>
            </Box>
        </Box>
        <div className={classes.options}>
          {button.map((item, index) => 
            <Button variant="outlined" className={classes.options_button} key={index}>
              {item}
            </Button>
          )

          }
        </div>
          <Divider className={classes.divider} />
          </div>
        <List>
          {
            resultError && (<ListItem >
              <ListItemText primary="no data found"/>
          </ListItem>)
          }
          {result && result.map((item, index) => {
            return(
            <ListItem className={classes.resultArea} key={index} button onClick={()=>{handleOnClick(item.district.name_en)}}>
                <LocationOnOutlinedIcon style={{marginRight:30}}/>
            <ListItemText primary={item.district.name_en}  />
          </ListItem>
          )})}
          </List>
          
      </Dialog>
    </div>
  );
}
