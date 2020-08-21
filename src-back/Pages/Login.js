import React, {Fragment, useState, Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import BlockImg from '../Components/BlockImg';
import {makeStyles} from '@material-ui/core/styles';

const Login = () => {
  return (
    <Fragment>
      <Box boxShadow="3" mt={4} pt={2} pb={2} mb={4} width="100%">
        <Grid container="bool" direction="column" alignItems="center">
          <Grid container="bool" justify="center" alignItems="center" direction="column">
            <BlockImg iconWhidth ="5" iconHeight="5" imgSize='50'></BlockImg>
            <Typography variant="h4" color="initial">Ingresar</Typography>
          </Grid>
          <FormControl fullWidth margin="dense">
            <Grid container="bool" direction="column" alignItems="center">
              <Box mt={2} width="50%">
                <TextField id="outlined-basic"  fullWidth label="Correo electrónico" variant="outlined"/>
              </Box>
              <Box mt={4} width="50%">
                <TextField
                  fullWidth="bool"
                  id="outlined-password-input"
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"/>
              </Box>
              <Box mt={3} width='50%' >
                <Button fullWidth variant="contained" color="secondary" >COMENZAR A CREAR PLAYLISTS</Button>
              </Box>
              <Box mt={3} mb={3}>
                <Link href="#" color="secondary" variant='body2'>¿HAZ OLVIDADO LA CONTRASEÑA?</Link>
              </Box>
            </Grid>
            <Divider variant="middle"/>
            <Grid
              container="bool"
              direction="column"
              justify="space-beetwen"
              alignItems="center">
              <Box >
                <Link href="#" color="inherit">¿NO TIENES CUENTA?</Link>
              </Box>
              <Box mt={3} width='25%' borderColor="secondary.main" borderRadius={5} border={1}>
                <Button variant="outlined"   fullWidth color="primary" href="#">REGISTRATE</Button>
              </Box>
            </Grid>
          </FormControl>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default Login;