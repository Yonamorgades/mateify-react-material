import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlockImg from '../Components/BlockImg';
import Box from '@material-ui/core/Box';

const Playlist = () => {
  return (
    <Fragment>
      <Grid container="bool" justify="center" alignItems="center" direction="column">
        <BlockImg iconWhidth ="10" iconHeight="10" imgSize ='100' mt={10}></BlockImg>
        <Box textAlign='center' fontSize={36} m={3}> 
          Algo no salió bien
        </Box>
        <Box fontSize={18} lineHeight={2} textAlign='center' m={1} width='20%'>
          Debes estar autenticado para acceder a esta pagina
        </Box>
      </Grid>
    </Fragment>
  )
}

export default Playlist;