import * as React from 'react';

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
          <Typography  variant="h4" color="#004d40" sx={{fontSize:26,fontWeight:600,mb:1,fontFamily:'poppins'}}>
          Sort by area of interest
            </Typography>
            <Stack direction="row" spacing={2} sx={{mb:3}}>
            {
            datas.map((data,id)=> <Button variant="outlined" color="info" size="md" sx={{color:"black",fontFamily:"popins"}} ><strong>{data}</strong></Button> )
            }
            
          </Stack>
          </Container>
          </div>
        </>


    );
}
export default Challange;