import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BlockImg from '../Components/BlockImg';

const Playlist = () => {
  return (
    <Fragment>
      <Grid container="bool" justify="center" alignItems="center" direction="column">
        <BlockImg iconWhidth ="15" iconHeight="15" imgSize = '200'></BlockImg>
        <Typography variant="h3">Algo no salió bien</Typography>
        <Typography variant="h6">Debes estar autenticado para acceder a esta pagina</Typography>
      </Grid>
    </Fragment>
  )
}

export default Playlist;