import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlockImg from '../Components/BlockImg';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

const Playlist = () => {
  return (
    <Fragment>
      <Box boxShadow={2} pt={10} pb={10} mt={10}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box>
            <BlockImg iconWhidth="10" iconHeight="10" imgSize='100'></BlockImg>
          </Box>
          <Grid >
            <Box variant='h3'fontSize={36} ml={5} mt={3} >
              <Hidden smDown>
                Mmm...
              </Hidden>
              Algo no salió bien
            </Box>
            <Box  mt={3} fontSize={18} lineHeight={2} textAlign='center'>
              Debes estar autenticado para acceder a esta pagina
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default Playlist;