
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




export default function Login() {
  const theme = createTheme();
  const [User,setUser]=useState({email:"",password:""});
  const handlechange=(e)=>{
    const {name,value}=e.target;
    setUser({...User,[name]:value});
}
  const dispatch=useDispatch();

  const rand=()=>{
    return Math.random().toString(36).substr(2); 

  }
  const token=()=>{
   return rand() + rand();
  }

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
   if(User.email!==' '&& User.password!==' '){
    const tokens=token();
    let user = new RegExp('[a-z0-9]+@edu.np');
    let gov=new RegExp('[a-z0-9]+@gov.np');
    if(user.test(User.email)){
      dispatch({type:"Userauth/GET_USER_TOKEN",payload:tokens});
      navigate("/explore");
    }
    else if(gov.test(User.email)){
      dispatch({type:"auth/GET_TOKEN",payload:tokens});
      navigate("/explore");
    }else{
        console.log("Invalid user!!");
    }
   
    console.log(tokens);
    
   
   }
    
  }

  return (
    <ThemeProvider theme={theme}>
        
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <div >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus onChange={handlechange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" onChange={handlechange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        </div>
      
      </Container>
    </ThemeProvider>
  );
}