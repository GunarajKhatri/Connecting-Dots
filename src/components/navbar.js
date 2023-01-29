import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'white',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.5),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#2E3B55',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Government</MenuItem>
      <MenuItem onClick={handleMenuClose}>User</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const initialURL="dot1.png";
  const laterURL="dot2.jpg";
  const [isClicked,SetisClicked]=React.useState(false);
  const handleLogin=()=>{
SetisClicked(true);
  }

  const [Show, setShow] = React.useState(false);
  const [UserShow, setUserShow] = React.useState(false);

let showingpart;
  const authState = useSelector((state) => state.auth.isAuthenticated);
  const userauthState = useSelector((state) => state.Userauth.isAuthenticated);
  React.useEffect(() => {
    if (authState) setShow(true);
    if (userauthState) setUserShow(true);
    // if(!Show){
    //   showingpart=<Featured laterURL={laterURL} initialURL={initialURL} isClicked={isClicked} />;
    // }else{
    //   showingpart=<PostChallenge />;
    // }
    console.log(Show);
  }, [authState,userauthState]);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const Logout=()=>{
    if(Show){
        dispatch({type:"auth/LOGOUT"});
        setShow(false);
    }
    if(UserShow){
        dispatch({type:"Userauth/LOGOUT"});
        setUserShow(false);
    }
    navigate("/home");

  }
  const redirect=()=>{
    navigate("/home");
  }
  

  
  return (
    <>
    //#2E3B55
    <Box sx={{ flexGrow: 1 }}>
     <AppBar style={{ background: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={redirect}>
          <img src="/logo1.png" sx={{borderRadius:5}} style={{maxHeight:40,maxWidth:50}}/>
          </IconButton >
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: '#2E3B55',
              textDecoration: 'none',
            }}
          >
            Connecting Dots
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"black"}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            
          {!Show && !UserShow &&(   <Button variant="contained" onClick={handleLogin}><Link className="nav-item" to="/login" style={{textDecoration:'none',color:'white'}}>
          Login
        </Link></Button>)}
          {!Show && !UserShow && (   <Button variant="contained"><Link className="nav-item" to="/login" style={{textDecoration:'none',color:'white'}}>Register</Link></Button> )}
          {Show && (   <Button variant="contained"  ><Link className="nav-item" to="/create/challenge" style={{textDecoration:'none',color:'white'}}>Post Challenge</Link></Button>)}
          {Show && (   <Button variant="contained" ><Link className="nav-item" to="/challenge/submissions" style={{textDecoration:'none',color:'white'}}>View Submissions</Link></Button> )}
          {UserShow && (
             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
               <Badge badgeContent={4} color="error">
                 <MailIcon sx={{color:"#4e342e"}} />
               </Badge>
             </IconButton>
             <IconButton
               size="large"
               aria-label="show 17 new notifications"
               color="inherit"
             >
               <Badge badgeContent={17} color="error">
                <NotificationsIcon  sx={{color:"#4e342e"}} />
               </Badge>
             </IconButton>
             <IconButton
               size="large"
               edge="end"
               aria-label="account of current user"
               aria-controls={menuId}
               aria-haspopup="true"
               onClick={handleProfileMenuOpen}
               color="inherit"
             >
               <AccountCircle  sx={{color:"#4e342e",fontSize:28}} />
               </IconButton>
             </Box>
          )}
          { (Show||UserShow) && (   <Button variant="contained" onClick={Logout}>Logout</Button> )}
          </Stack>
          
        </Toolbar>
      </AppBar>
    </Box>
     

    </>
  );
}



