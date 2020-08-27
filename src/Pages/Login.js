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

const Login = ({handleClickLogin, handleChangePsw, handleChangeMail}) => {
  return (
    <Fragment>
      <Box boxShadow="3" mt={3} pt={2} pb={2} mb={4} width="100%">
        <Grid container="bool" direction="column" alignItems="center">
          <BlockImg iconWhidth="5" iconHeight="5" imgSize='50'></BlockImg>
          <Typography variant="h4" color="initial">Ingresar</Typography>
          <Box mt={2} width="75%">
            <TextField
              id="outlined-basic"
              onChange={handleChangeMail}
              fullWidth
              label="Correo electrónico"
              variant="outlined"/>
          </Box>
          <Box mt={4} width="75%" alignItems='center'>
            <TextField
              onChange={handleChangePsw}
              fullWidth="bool"
              id="outlined-password-input"
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              variant="outlined"/>
          </Box>
          <Box mt={3} width='75%' component='h6'>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleClickLogin}>
              <Box fontSize={16}>COMENZAR A CREAR PLAYLISTS</Box>
            </Button>
          </Box>
          <Box mt={2} mb={2} letterSpacing={1} textAlign='center'>
            <Link href="#" color="secondary" variant='body2'>¿HAZ OLVIDADO LA CONTRASEÑA?</Link>
          </Box>
          <Grid
            container="bool"
            direction="column"
            justify="space-beetwen"
            alignItems="center">
            <Box fullWidth></Box>
            <Box letterSpacing={1}>
                <Button component={Link} disabled>
                ¿NO TIENES CUENTA?
                </Button>
            </Box>
            <Box
              mt={2}
              width='25%'
              borderColor="secondary.main"
              borderRadius={5}
              border={1}>
              <Button variant="outlined" fullWidth color="primary" href="#">REGISTRATE</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}
export default Login;