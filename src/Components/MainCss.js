import {  makeStyles, } from '@material-ui/core/styles';


  
const useStyles = makeStyles((theme) => ({
    root:{
     display:'flex',
     height:'40px !important',
    },
    Listroot:{
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 250,
    },
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    anchorMenu:{
      color:'#f77062',
      backgroundColor:'white',
      padding:'20px',
      fontSize:'14px',
      fontWeight:'bold',
      
    },
     anchorSelected:{
      color:'White',
      backgroundColor:'#f77062',
      padding:'20px',
      fontSize:'14px',
      fontWeight:'bold',
   
    },
    CategoryMenu:{
      height:'25px',
      fontSize:'12px',
      textAlign:'center',
      fontWeight:'bold'
    },
    
    ButtonBackground:{
      width:'5px',
      height:'25px',
      float:'left',
      display:'block'
    },
    divToDoList:{
      color: 'black',
      height: '30px', 
      fontWeight:'bold',
      fontSize:'34px', 
      marginBottom:'30px'
    },
    divStepour:{
      color: 'lightgrey',
      height: '10px', 
      fontSize:'10px', 
      paddingBottom:'5px' 
    },
    TaskMenuColor:{
      width:"20px",
      height:'20px',
      display:'block'
    },
    StatusBar:{
      color: 'lightgrey', 
      height: '40px',
      fontSize:'18px',
      textAlign:'Center'
    },
    DivChangeStatus:{
      float:'right',
      width:'60%',
      textAlign:'right',
      paddingRight:'30px'
    },
    DivTasksLeft:{
      color:'#f77062',
      width:'40%', 
      padding:'10px', 
      fontWeight:'bold',  
      paddingLeft:'20px'
    },
    DivTasksList:{
      backgroundColor: 'white',
      height: '57vh',
      paddingTop:'0px'

    },
    HeaderBackground :{
      backgroundColor: 'white', 
      height: '32vh',
      paddingTop:'10px'
    },
   
    DivChkBox:{
      float:'left',
      width:'8%',
      padding:'20px'
    },

    DivAddTask:{
      width:'92%',
      float:'right'
    },

    Percent:{
      backgroundColor:'#f77062'
    }

    
  }));
  
  
  export default useStyles;
  
  
