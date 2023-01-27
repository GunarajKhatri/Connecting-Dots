
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const Featurechallange=()=>{


    return (
        <Paper sx={{ position:'relative',
            top:20,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage:"url(/challangef1.jpeg)",
            width:1150,
            height:550
            }}  >

<Grid item xs={12} md={6}>
<Typography component="h1" variant="h5" sx={{fontWeight:800,color:"black",mt:5,backgroundColor:"#ffebee",height:43,fontSize:28,fontFamily:"poppins"}} style={{paddingLeft:15,paddingTop:2}}>
            Featured Challenge
            </Typography>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex',position:'absolute',top:55,left:50,width:550,height:400,borderRadius:4 }}>
          <CardContent sx={{ flex: 1,ml:3 }}>
            <Typography component="h1" variant="h4" sx={{fontWeight:700,color:"GrayText",mt:2}}>
            Buildings Upgrade Prize
            </Typography>
          
            <Typography variant="subtitle1" paragraph sx={{fontFamily:"poppins",mt:3,fontSize:18,color:"grey"}}>
             Government Challanges
            </Typography>
            <Stack direction="row" spacing={1}>
  <Chip label="Infrastracture" onClick={()=>(alert("clicked"))} sx={{fontWeight:700}} />
  <Chip label="Science" onClick={()=>(alert("clicked"))} sx={{fontWeight:700}}/>
</Stack>
<Typography variant="subtitle1" paragraph sx={{fontFamily:"poppins",mt:2,fontSize:17,color:"#00796b",fontWeight:450}}>
Supports actionable and scalable solutions to advance energy efficiency and efficient electrification upgrades in existing U.S. buildings.
            </Typography>
            <Divider />
            <Button variant="contained" size="large" sx={{backgroundColor:"green",fontFamily:"poppins",mt:3}}>
         <strong>Solve a Challange</strong>
        </Button>
          </CardContent>
        
        </Card>
      </CardActionArea>
   
    </Grid>

            </Paper>


    );
}
export default Featurechallange;