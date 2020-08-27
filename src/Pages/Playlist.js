import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Hidden from '@material-ui/core/Hidden';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import songs from '../Songs';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';

const Playlist = () => {
  const [searchSong,
    setSearchSong] = React.useState("");
  const [searchResults,
    setSearchResults] = React.useState([]);

  const [playlist,
    SetPlaylist] = React.useState([]);

  const handleChangeSearch = event => {
    setSearchSong(event.target.value);
  };
  const addVoteSong = (event, uuid) => {
    let indice = playlist.findIndex(s => s.uuid === uuid)
    let newPlaylist = [...playlist]
    newPlaylist[indice].votes = newPlaylist[indice].votes
      ? newPlaylist[indice].votes + 1
      : 1;
    SetPlaylist(newPlaylist)
  };
  const removeVoteSong = (event, uuid) => {
    let indice = playlist.findIndex(s => s.uuid === uuid)
    let newPlaylist = [...playlist]
    newPlaylist[indice].votes = newPlaylist[indice].votes
      ? newPlaylist[indice].votes - 1
      : 1;
    SetPlaylist(newPlaylist)
  };
  const handleClickAdd = song => {
    let inPlaylist = playlist.find(s => s === song);
    if (!inPlaylist) {
      SetPlaylist([
        ...playlist,
        song
      ]);
    }
  }

  React.useEffect(() => {
    const results = songs.filter(song => searchSong
      ? JSON.stringify(song).toLowerCase().includes(searchSong.toLowerCase())
      : '');
    const filterResult = results.filter(r => !playlist.includes(r));
    setSearchResults(filterResult.slice(0, 5));
  }, [searchSong, playlist]);

  return (
    <Fragment>
      <Grid container="bool" justify="center" alignItems="center" direction="column">
        <Box m={4} width='50%'>
          <OutlinedInput
            placeholder="Buscar"
            labelWidth={0}
            onChange={handleChangeSearch}
            value={searchSong}
            fullWidth='bool'
            startAdornment={< InputAdornment position = "start" > <SearchOutlinedIcon/> </InputAdornment>}/>
        </Box>
        <Box mt={1} width='100%'>
          <TableContainer component={Paper}>
            <Table >
              <TableHead>
                <Box m={2}>
                  <Typography variant='h6' color='secondary'>
                    Resultados
                  </Typography>
                </Box>
                <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Artista</TableCell>
                  <Hidden smDown>
                    <TableCell align="left">Album</TableCell>
                    <TableCell align="left">Duración</TableCell>
                  </Hidden>
                  <TableCell align="left">Agregar</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {searchResults.map((row) => (
                  <TableRow key={row.uuid}>
                    <TableCell>
                      <Grid container direction="row" spacing={2} alignItems="center">
                        <Hidden smDown>
                          <Box m={1}>
                            <Avatar alt={row.artist.name} src={row.artist.coverUrl}/>
                          </Box>
                        </Hidden>
                        <Box m={1}>
                          <Typography >{row.name}</Typography>
                        </Box>
                      </Grid>
                    </TableCell>
                    <TableCell align="left">
                      {row.artist.name}
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="left">{row.album}</TableCell>
                    </Hidden>
                    <Hidden smDown>
                      <TableCell align="left">{row.duration}</TableCell>
                    </Hidden>
                    <TableCell align="left">
                      <Fab
                        color="secondary"
                        size="small"
                        onClick={() => handleClickAdd(row)}
                        aria-label="add">
                        <AddIcon/>
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))}

                {searchResults.length < 1 && <TableRow key='error' align='center'>
                  <TableCell
                    colspan="6"
                    style={{
                    "text-align": "center"
                  }}
                    variant="footer">
                    <Typography>
                      No hay Resultados: Utiliza la barra de búsqueda para encontrar canciones
                    </Typography>
                  </TableCell>
                </TableRow>
}
              </TableBody>

            </Table>
          </TableContainer>
        </Box>
        <Box width='100%' mt={4}>
          <TableContainer component={Paper} mt={2}>
            <Table >
              <TableHead>
                <Box m={2}>
                  <Typography variant='h6' color='secondary'>
                    Tu Playlist
                  </Typography>
                </Box>
                <TableRow>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Artista</TableCell>
                  <Hidden smDown>
                    <TableCell align="left">Duracion</TableCell>
                  </Hidden>
                  <Hidden smDown>
                    <TableCell align="left">Cantidad de votos</TableCell>
                  </Hidden>
                  <TableCell align="left">Votar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playlist.map((row) => (
                  <TableRow key={row.uuid}>
                    <TableCell>
                      <Grid container direction="row" spacing={2} alignItems="center">
                        <Hidden smDown>
                          <Box m={1}>
                            <Avatar alt={row.artist.name} src={row.artist.coverUrl}/>
                          </Box>
                        </Hidden>
                        <Box m={1}>
                          <Typography >{row.name}</Typography>
                        </Box>
                      </Grid>
                    </TableCell>
                    <TableCell align="left">
                      {row.artist.name}
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="left">{row.duration}</TableCell>
                    </Hidden>
                    <Hidden smDown>
                      <TableCell align="left">{row.votes
                          ? row.votes
                          : ''}</TableCell>
                    </Hidden>
                    <TableCell align="center">
                      <Grid container direction="row" alignItems='center'>
                        <Box>
                          <ThumbUpIcon onClick={(event) => addVoteSong(event, row.uuid)}></ThumbUpIcon>
                        </Box>
                        <Hidden smDown>
                          <Box ml={2}>
                            <ThumbDownIcon onClick={(event) => removeVoteSong(event, row.uuid)}></ThumbDownIcon>
                          </Box>
                        </Hidden>
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}

                {playlist.length < 1 && <TableRow key='error' align='center'>
                  <TableCell
                    colspan="6"
                    style={{
                    "text-align": "center"
                  }}
                    variant="footer">
                    <Grid container="bool" direction="column" alignItems="center">
                      <Box boxShadow={1} p={2} mt={1} mb={1} width='50%' alignItems='center'>
                        <Typography variant='body1'>
                          UPS!, TU PLAYLIST AUN ESTA VACIA
                        </Typography>
                        <Typography>
                          Comienza a agregar canciones
                        </Typography>
                      </Box>
                    </Grid>
                  </TableCell>
                </TableRow>
}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Fragment>
  );
}
export default Playlist;
