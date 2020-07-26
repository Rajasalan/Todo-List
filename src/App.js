import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Main from './Components/Main';


function App() {

  
  return (

    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' }} >
      <Main/>
      </Typography>
    </Container>
   </React.Fragment>
    
  );
}

export default App;
