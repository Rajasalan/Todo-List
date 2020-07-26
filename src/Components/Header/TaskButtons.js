import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Category from '../../Models/Category';
import AddIcon from '@material-ui/icons/Add';
import MenuEnter from '../MenuEnter'
import MenuLeave from '../MenuLeave'
import useStyles from "../MainCss";
import AppDialogBox from '../Dialogs/DialogBox';

/**
 * TaskButtons displays all category and colors
 *  
 * @returns   AppDialogBox
 * @method addTaskButton
 * @method addCategory
 * @method buttonItems // This  function displays all category name
 * @method colorItems  // This  function displays different label color in dialog box
 * onClick={addCategory} this function is used to add new category and the color code when Add category button is clicked
 */

export default function TaskButtons() {
  const classes = useStyles(); /** Main css */
  const [open, setOpen] = React.useState(false);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTaskButton=()=>{
    return(
      <Button  className={classes.margin}  onClick={addCategory}>
      Add Category
      </Button>
    )
  }

  const addCategory=()=>{
    
      var metadata={
        Name:document.getElementById("txtCategory").value,
        Color:document.getElementById("txtColor").value
      }
      Category.push(metadata);
      setOpen(false);
  }

  

  const buttonItems=Category.map((Item)=>
   <td style={{width:'25%'}} menucolor={Item.Color}   >
    <div className={classes.ButtonBackground} style={{backgroundColor:Item.Color}} ></div>
    <div className={classes.CategoryMenu} menuColor={Item.Color}  onMouseEnter={MenuEnter} onMouseLeave={MenuLeave} onClick={handleClickOpen} id={Item.Name}  >
      <span >{Item.Name}</span>
      </div>
    </td>
  );

  
  const colorItems=Category.map((Item)=>
     <td ><span className={classes.TaskMenuColor} style={{backgroundColor:Item.Color}} > </span></td>
   )

  return (
    <div>
      <table width="70%" id="tblMenus"><tr>
        {buttonItems}
        <td><a href="javascript:void(0)" onClick={handleClickOpen}><AddIcon/></a></td>
        </tr></table>
        <AppDialogBox Title="Category"  Open={open} Margin={classes.margin} HandleClose={handleClose} AddButton={addTaskButton()}>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
             <TextField id="txtCategory" label="Category" />
             <TextField id="txtColor" label="Color Code" />
             <table width="60%"><tr>{colorItems}</tr></table>
             </FormControl>
          </form>
      </AppDialogBox>
     </div>
  

  );
}
