import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlockImg from '../Components/BlockImg';
import Box from '@material-ui/core/Box';

const Playlist = () => {
  return (
    <Fragment>
      <Box boxShadow={1} mt={10} mb={10}>
        <Grid container="bool" justify="center" alignItems="center" direction="column">
          <BlockImg iconWhidth="10" iconHeight="10" imgSize='100' mt={10}></BlockImg>
          <Box textAlign='center' variant='h3' fontWeight={1} fontSize={36} m={3}>
            Algo no salió bien
          </Box>
          <Box fontSize={18} lineHeight={2} textAlign='center' m={5} >
            Debes estar autenticado para acceder a esta pagina
          </Box>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default Playlist;