import React from 'react';
import useStyles from "../MainCss";

/**
 * TaskStatus shows how much percentage task completed in progress bar
 */
export default function TaskStatus(props) {

    const classes = useStyles();
    let totalTasks=props.TodoItem.length;
    let completeTask=0;
    props.TodoItem.map((Item)=>{
        if(Item.completed===true)
      completeTask++;
    })

    let perCompleted=Math.floor((completeTask/totalTasks)*100);
    
    let tdWidth1=perCompleted+"%"
    let tdWidth2=tdWidth1+" Completed"
    

    return (
  
      <React.Fragment>
      <table width='100%' style={{paddingLeft:'0px'}}>
        <tr>
          <td className={classes.Percent} style={{width:tdWidth1}}>&nbsp;</td>
          <td className={classes.StatusBar} >{tdWidth2}</td>
        </tr>
      </table>
      </React.Fragment>
      
    );
  }