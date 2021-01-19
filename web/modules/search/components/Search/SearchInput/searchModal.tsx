import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box, InputBase,Link,Divider,Button, Typography } from "@material-ui/core";
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
      padding: '15px',
      overflowX: 'scroll',
      overflowY:'hidden'
    },
    options_button: {
      marginRight: '5px',
      minWidth: '100px',
      minHeight: 28,
      borderRadius:"20px"
    },
    arrow: {
      height: 30,
      width: 30,
      marginLeft: 5,
      marginRight: 5
    },
    resultArea: {
      overflowY: 'scroll',
      maxWidth: '300px',
      transform: 'scale(1.1, 1.1)',
      overflowX: 'hidden',
    },
    error: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center'
    },
    error_text: {
      width:"304px",
      fontWeight:'600',
      fontSize: '18px',
      lineHeight: '20px',
      textAlign:'center'
    },
    error_img: {
      marginLeft:'50px'
    },
    error_text_secondary: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      textAlign:'center',
      letterSpacing: '0.5px',


      color:' #333333',
    },
    error_text_div: {
      position: 'absolute',
      width: '275px',
      height:' 86px',
      left: '51px',
      top: '296px',
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
  const { open,handleInputState,input, handleClose, handleOnChange, result, resultError, handleOnClick } = props
  const button = ['Singapore', 'japan', 'thailand', 'china', 'pakistan']
  


  return (
    <div>
     
      <Dialog className={classes.dialog} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <div>
        <Box className={classes.container}>
            <ArrowBackIcon className={classes.arrow} onClick={handleClose} />
            <Box mb={5} className={classes.searchBox}>
                <Box className={classes.searchIcon}>
              <CancelOutlinedIcon onClick={handleInputState} style={{height:20,width:20}}/>
                </Box>
                <InputBase classes={{input: classes.input}} name='search' value={input}  onChange={handleOnChange} fullWidth placeholder="Where do you need space?"/>
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
          </div>
        <List>
          {
            resultError && (
              <>
              <div className={classes.error}>
                <div>
                  <img className={classes.error_img} src='/images/SearchLocation/location.png' alt=''/>
                  <Typography variant="h3" className={classes.error_text}>
                    We can't find any location that match your search
                  </Typography>
                 
                </div>
              </div>
               <div className={classes.error_text_div}>
                  <Typography className={classes.error_text_secondary}>
                    You can try changing your location Or <Link>contact us</Link> for more information.
                  </Typography>
                </div>
                </>
          )
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
