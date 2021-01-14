import React, { Children } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Slide } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

const useStyles = (fullWidth, fullHeight) =>
  makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: "absolute",
        outline: "none",
        backgroundColor: "white",
        border: "none",
        overflowY: "auto",
        overflowX: "hidden",
      },
      innerDiv: {
        outline: "none",
        border: "none",
        backgroundColor: "white",
        padding: theme.spacing(2, 4, 3),
        minHeight: fullHeight ? "100%" : undefined,
        width: fullWidth ? "100%" : 400,
      },
    })
  );

export default function SimpleModal(props: {
  open: boolean;
  setOpen: Function;
  children: React.ReactNode;
  fullWidth?: boolean;
  fullHeight?: boolean;
}) {
  const { open, setOpen, children, fullWidth, fullHeight } = props;

  const classes = useStyles(fullWidth, fullHeight)();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.paper}
      >
        {/* <Slide direction="up" in={open} mountOnEnter unmountOnExit> */}
        <div className={classes.innerDiv}>{children}</div>
        {/* </Slide> */}
      </Modal>
    </div>
  );
}
