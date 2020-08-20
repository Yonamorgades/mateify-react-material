import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MateifyLogo from '../Images/LogoMateify.png';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
  typography: {
    fontFamily: [ 'Righteous,cursive']
    }
});

const NavBar = ({loginState}) => {
  const classes = styles();

  return (
    <Box boxShadow="3">
      <AppBar position="static">
        <Toolbar>
          <Grid container={true} direction="row" justify={loginState?'space-between':'center'} alignItems="center">
            <img src={MateifyLogo} alt="MateifyLogo"/>
            <Typography variant="h6" className={classes.typography}>
              Mateaify
            </Typography>
            Componente imagen
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;