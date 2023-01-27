import * as React from 'react';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Grid from '@mui/joy/Grid';
import Featurechallange from './featurechallange';
const Challange=()=>{
    const datas=["Technology","Arts & Design,Energy","Environment and Resources","Infrastructures","Fnanace","Covid-19","Space"];

    return(
        <>
    <div style={{marginTop:100}} >
    <Container >
    <Typography component="h1" variant="h3" color="#004d40" style={{fontWeight:600}}>
            Explore Challanges
            </Typography>
          <Typography variant="h6" sx={{ml:0,mt:1,mb:1,fontWeight:550,fontFamily:'poppins',fontSize:18}}>Find a challenge, solve it, make a difference.</Typography>
          <Typography  variant="h4" color="#004d40" sx={{fontSize:26,fontWeight:600,mb:2,fontFamily:'poppins'}}>
          Sort by area of interest
            </Typography>
            <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ flexGrow: 1 }}
    >
      {datas.map((_, index) => (
        <Grid xs={2} sm={4} md={2} key={index} display="flex" >
          <Button variant="outlined"style={{wordWrap:'nowrap',minWidth:"auto",color:'#004d40',borderColor:'black'}}><strong>{_}</strong></Button>
        </Grid>
      ))}
    </Grid>
    <Featurechallange/>
          </Container>
          </div>
        </>


    );
}
export default Challange;