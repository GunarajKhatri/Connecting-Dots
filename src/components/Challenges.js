import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/material/Stack';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export default function Challenges() {
    const Challenges=[
        {   id:1,
            title:"Buildings Upgrade Prize",
            image_url:"challangef1.jpeg",
            descrip:"We invite innovators from all over the world to submit ideas for experiments or tests that could be conducted on the Moon."
            
        },
        {   id:2,
            title:"Buildings Upgrade Prize",
            image_url:"challangef1.jpeg",
            descrip:"We invite innovators from all over the world to submit ideas for experiments or tests that could be conducted on the Moon."
            
        },
        {   id:3,
            title:"Buildings Upgrade Prize",
            image_url:"challangef1.jpeg",
            descrip:"We invite innovators from all over the world to submit ideas for experiments or tests that could be conducted on the Moon."
            
        },
        {   id:4,
            title:"Buildings Upgrade Prize",
            image_url:"challangef1.jpeg",
            descrip:"We invite innovators from all over the world to submit ideas for experiments or tests that could be conducted on the Moon."
            
        },
        {   id:5,
            title:"Buildings Upgrade Prize",
            image_url:"challangef1.jpeg",
            descrip:"We invite innovators from all over the world to submit ideas for experiments or tests that could be conducted on the Moon."
            
        },
        {   id:6,
            title:"Buildings Upgrade Prize",
            image_url:"challangef1.jpeg",
            descrip:"We invite innovators from all over the world to submit ideas for experiments or tests that could be conducted on the Moon."
            
        },
    ];
  return (
    <Grid
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
    sx={{ flexGrow: 1,mt:5 }}
  > 
  { Challenges.map((chall,index)=>(
      <Grid xs={2} sm={4} md={4} key={index} >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={'/'+chall.image_url}
          alt="green iguana"
        />
        <CardContent>
        <Stack
  direction="row"
  spacing={8}
sx={{display:"inline-flex"}}>   
<Typography gutterBottom variant="h5" component="div" sx={{fontWeight:550,fontSize:15,color:"grey"}}>
         By Government
          </Typography>
<StarBorderOutlinedIcon sx={{color:"grey"}} style={{paddingLeft:100}}/>

    </Stack>
        
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:600,fontSize:20}}>
         {chall.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{mt:4,fontWeight:550,fontSize:16}}>
            {chall.descrip}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  ))
}
    </Grid>
  );
}