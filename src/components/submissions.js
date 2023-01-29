import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';

export default function Submissions() {
    const navigate=useNavigate();
    const Challenges=[
        {   id:1,
            title:"Community Power Accelerator",
        },
        {   id:2,
            title:"Buildings Upgrade Prize",
           
        }];
        const submis=()=>{
          navigate("/1/challenge/submissions");
        }
  return (
    <Container>

    <Box sx={{ bgcolor: '#b3e5fc' ,marginTop:10,  
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'start'}}>
     <Typography component="h1" variant="h3" sx={{fontSize:20,ml:3,mt:2,textDecoration:'underline',textDecorationColor:'black'}} color="#006064" style={{fontWeight:550}}>
            See All Challenges Submissions:
            </Typography>
  
        <List>
            {Challenges.map((ch,id)=><ListItem>
            <ListItemButton onClick={submis}>
            <Typography variant="h5" sx={{fontWeight:550,color:"black",fontSize:20,display:'inline-block',fontFamily:"poppins"}} id="1">
               {id+1}. {ch.title}
            </Typography>
            </ListItemButton>
          </ListItem>
            )}
          
        </List>
  
    </Box>
    </Container>
  );
}
