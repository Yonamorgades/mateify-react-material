import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MateifyLogo from '../Images/LogoMateify.png';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const NavBar = ({loginState,currentUser}) => {
  return (
    <Box boxShadow="3">
      <AppBar position="static">
        <Toolbar>
          <Grid container={true} direction="row" justify={loginState?'space-between':'center'} alignItems="center">
            <img src={MateifyLogo} alt="MateifyLogo"/>
            <Box ml={2} textAlign="center" fontSize={32} fontFamily='Righteous'> 
              Mateaify
            </Box>
            {loginState && <Avatar alt={currentUser.email} src={currentUser.imageUrl}/>}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;