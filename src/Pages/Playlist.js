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
import FormControl from '@material-ui/core/FormControl';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import songs from '../Songs';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function Playlist() {

  const [searchSong,
    setSearchSong] = React.useState("maldici");
  const [searchResults,
    setSearchResults] = React.useState([]);

  const [playlist,
    SetPlaylist] = React.useState([]);

  const handleChangeSearch = event => {
    setSearchSong(event.target.value);
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
  }, [searchSong,playlist]);

  const classes = useStyles();
  return (
    <Fragment>
      <Grid container="bool" justify="center" alignItems="center" direction="column">
        <Box m={5}>
          <FormControl >
            <OutlinedInput
              placeholder="Buscar"
              labelWidth={0}
              onChange={handleChangeSearch}
              value={searchSong}
              startAdornment={< InputAdornment position = "start" > <SearchOutlinedIcon/> < /InputAdornment>}/>
          </FormControl>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <Typography style={{
                fontSize: 20
              }}>
                Resultados
              </Typography>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">Artista</TableCell>
                <TableCell align="left">Album</TableCell>
                <TableCell align="left">Duracion</TableCell>
                <TableCell align="left">Agregar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {searchResults.map((row) => (
                <TableRow key={row.uuid}>
                  <TableCell>
                    <Grid container direction="row" spacing={2} alignItems="center">
                      <Avatar alt={row.artist.name} src={row.artist.coverUrl}/>
                      <Typography >{row.name}</Typography>
                    </Grid>
                  </TableCell>
                  <TableCell align="left">
                    {row.artist.name}
                  </TableCell>
                  <TableCell align="left">{row.album}</TableCell>
                  <TableCell align="left">{row.duration}</TableCell>
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
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <Typography style={{
                fontSize: 20
              }}>
                Tu playlist
              </Typography>
              <TableRow>
                <TableCell align="left">Nombre</TableCell>
                <TableCell align="left">Artista</TableCell>
                <TableCell align="left">Duracion</TableCell>
                <TableCell align="left">Cantidad de votos</TableCell>
                <TableCell align="left">Votar</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {playlist.map((row) => (
                <TableRow key={row.uuid}>
                  <TableCell>
                    <Grid container direction="row" spacing={2} alignItems="center">
                      <Avatar alt={row.artist.name} src={row.artist.coverUrl}/>
                      <Typography >{row.name}</Typography>
                    </Grid>
                  </TableCell>
                  <TableCell align="left">
                    {row.artist.name}
                  </TableCell>
                  <TableCell align="left">{row.duration}</TableCell>
                  <TableCell align="left">{row.votes
                      ? row.votes
                      : ''}</TableCell>
                  <TableCell align="left">
                    <Grid container direction="row" spacing={4} alignItems="center">
                      <ThumbUpIcon></ThumbUpIcon>
                      <ThumbDownIcon></ThumbDownIcon>
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
                  <Typography>
                    UPS!, TU PLAYLIST AUN ESTA VACIA Comienza a agregar canciones
                  </Typography>
                </TableCell>
              </TableRow>
}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Fragment>
  );
}
export default Playlist;
