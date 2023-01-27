import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Featured() {
  
  return (
    <Paper
      sx={{
        position: 'relative',
        top:70,
        color: '#fff',
        mt:5,
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage:"url(/dot1.png)"
      }}
     style={{height:550}}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
         backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              top:100
            }}
          >
            <Container >
            <Typography component="h1" variant="h3" color="#004d40" gutterBottom style={{fontWeight:600}}>
            Let us help you
            </Typography>
            <Typography variant="h5" color="black"  style={{fontWeight:500,fontSize:23,fontFamily:"Poppins"}}>
            t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Typography>
            <Button variant="contained" sx={{mt:4}}><b>Get Started</b></Button>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Featured;