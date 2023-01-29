

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function ViewChallenge() {
    const navigate=useNavigate();
    const Solve=()=>{
            navigate("/1/challenge/solution");
    }
  return (
    <Container >
    <Box sx={{ flexGrow: 1,marginTop:7}}>
    <Typography component="h1" variant="h4" sx={{mb:3}} color="#004d40" style={{fontWeight:600}}>
            Governmnet Challenge
            </Typography>
      <Grid container spacing={2}>
        <Grid item xs={7} md={7}>
        <img src="/challangef1.jpeg" alt="challenge" height="390" />
        </Grid>
        <Grid item xs={5} md={5}>
        <Typography variant="h5" sx={{fontWeight:600,color:"black",ml:4,fontSize:50,display:'inline-block',fontFamily:"poppins"}} >
        Community Power Accelerator 
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{mt:3,ml:4,fontWeight:580,fontSize:20}}>
            Fast-tracks the efforts of solar developers to learn and grow their operations to support multiple, successful community solar projects.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ml:4,mt:2,mb:2}}>
  <Chip label="Infrastracture" onClick={()=>(alert("clicked"))} sx={{fontWeight:700}} />
  <Chip label="Science" onClick={()=>(alert("clicked"))} sx={{fontWeight:700}}/>
</Stack>
<Divider sx={{ml:4,mt:2}}/>
<Typography variant="body2" color="text.secondary" sx={{mt:2,ml:4,fontWeight:580,fontSize:22}}>
          Prize:<b style={{color:'black'}}> Rs.1000</b>
          </Typography>
          <Divider sx={{ml:4,mt:2}}/>
          <Button variant="contained" size="large" onClick={Solve} sx={{backgroundColor:"green",fontFamily:"poppins",ml:4,mt:3,width:460}}>
         <strong>Solve this Challange</strong>
        </Button>
        </Grid>
        
      </Grid>
      <Typography component="h1" variant="h4" sx={{mt:4}} color="black" style={{fontWeight:600}}>
            Challenge Overviews
            </Typography>
            <Typography variant="body2" color="#004d40" sx={{mt:2,mb:3,fontWeight:580,fontSize:16}}>
            The American-Made Community Power Accelerator Prize is a $10 million prize competition designed to fast-track the efforts of new, emerging, and expanding solar developers and co-developers to learn, participate, and grow their operations to support multiple successful community solar projects. <br/>
The goal of this prize is to grow a robust ecosystem of community solar project developers that incorporate meaningful benefits into projects across the United States......
          </Typography>
          <Typography component="h1" variant="h4" sx={{mt:3}} color="black" style={{fontWeight:600}}>
            Challenge Guidelines
            </Typography>
            <Typography variant="body2" color="#004d40" sx={{mt:2,fontWeight:580,fontSize:16}}>
            Please review the official rules for the complete application process and instructions for competing.

If you want to receive updates on the prize or have any questions, please subscribe by using the contact feature on the HeroX platform or message us directly at Solar.Prize@nrel.gov.


          </Typography>
    </Box>
    </Container>
  );
}