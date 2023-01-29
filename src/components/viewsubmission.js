

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export default function ViewSubmissions() {
    

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
          Prize:<b style={{color:'black'}}> Rs.1,00,000</b>
          </Typography>
       
        </Grid>
        
      </Grid>
      <Typography component="h1" variant="h4" sx={{mt:4,mb:2,textDecoration:'underline',textDecorationColor:'blacksss'}} color="black" style={{fontWeight:600}}>
            Solution Submissions
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={7} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="/team1.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
Curtis Johnson
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Download Proposal</Button>
        <Button size="small">contact</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
 
    </Box>
    </Container>
  );
}