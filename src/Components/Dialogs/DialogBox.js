import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

/**
 * AppDialogBox is a component which contain add  categories dialog box.
 *  
 * @returns     Dialog 
 * 
 * {props.Title} Title of the dialog box
 *  {props.children} adds new category  and the color code text field
 * {props.AddButton}  add category button
 * {props.HandleClose} close button in the dialog box
 */

export default function AppDialogBox(props){
  
  
    return (
        <Dialog 
        scroll='body' 
        open={props.Open}
        onClose={props.HandleClose} 
        aria-labelledby={props.Title}>  
        <DialogTitle id="max-width-dialog-title">{props.Title}</DialogTitle> 
        <DialogContent>
           {props.children}
         </DialogContent>
        <DialogActions>
        {props.AddButton}
        <Button className={props.Margin} onClick={props.HandleClose}>
        Close
        </Button>
       </DialogActions>
      </Dialog>
    )

}