import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="#">
        ConnectingDots
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (

      <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 1,
          justifyContent:'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" sx={{paddingLeft:50}}>
       
          <Stack direction="row" spacing={2}>
         < FacebookIcon />
         <InstagramIcon />
         <TwitterIcon />
      </Stack>
          <Copyright />
        </Container>
      </Box>
   
  );
}