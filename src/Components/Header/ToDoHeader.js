import React from 'react';
import TaskButtons from './TaskButtons';
import TaskStatus from './TaskStatus';
import todo from '../../Models/todo' ;
import useStyles from "../MainCss";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

/**
 * ToDoHeader component shows labels, category and progress bar
 *  
 * @returns  TaskButtons
 * @returns  TaskStatus

 */
export default function ToDoHeader() {
  const classes = useStyles();
  return (

    <React.Fragment>
    <Container maxWidth="sm">
    <Typography component="div" className={classes.HeaderBackground}  >
    <div style={{ backgroundColor: 'white',paddingTop:'25px'  }}>
    <div className={classes.divStepour}>
    </div>
    <div className={classes.divToDoList}>
    To-Do List
    </div>
    </div>
    <TaskButtons />
    <div style={{paddingBottom:'10px'}}></div>
    <TaskStatus TodoItem={todo}/>
    </Typography>
    </Container>
         
  </React.Fragment>
    
  );
}

