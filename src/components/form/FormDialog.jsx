import React from 'react';
import {UserForm} from "./UserForm";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: '2rem',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgb(64 189 237 / 90%)'
    }    
  }

}))

export default function FormDialog(props) {
   
  const classes = useStyles();

  return (
      <Dialog maxWidth={'sm'} open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Have any query, please share with us <CloseIcon onClick={props.handleClose} className={classes.close} /></DialogTitle>
        <DialogContent>
            <UserForm handleClose={props.handleClose} />
            <Typography color="primary" align='center'>You can write here <a href="mailto:info@dpathway.com">info@dpathway.com</a></Typography>
        </DialogContent>
        
      </Dialog>
  );
}


 
