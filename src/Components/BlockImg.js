import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Box from '@material-ui/core/Box';

const iconBox = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 10,
  border: 1,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
};

const BlockImg = ({iconWhidth, iconHeight, imgSize}) => {
   return (
      <Grid container="bool" justify="center" alignItems="center" direction="column">
        <Box display="flex" justifyContent="center">
          <Box borderRadius="50%" {...iconBox} style={{ width:iconWhidth + 'rem', height:iconHeight + 'rem' }}>
              <LockRoundedIcon style={{ fontSize: imgSize }} color="secondary"></LockRoundedIcon>
          </Box>
        </Box>
      </Grid>
  )
}

export default BlockImg;