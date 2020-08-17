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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, artist, duration, votes) {
  return {name, artist, duration, votes};
}

const rows = [createData('Maldición', 'Once Tiros', '3:04', 1252)];
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container="bool" justify="center" alignItems="center" direction="column">
        <Box m={5}>
          <FormControl >
            <OutlinedInput
              placeholder="Buscar"
              labelWidth={0}
              startAdornment={< InputAdornment position = "start" > <SearchOutlinedIcon/> </InputAdornment> }/>
          </FormControl>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <Typography variant="h6" style={{
                fontSize: 20
              }}>
                Tu playlist
              </Typography>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Artista</TableCell>
                <TableCell align="center">Duracion</TableCell>
                <TableCell align="center">Cant.Votos</TableCell>
                <TableCell align="center">Agregar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.artist}</TableCell>
                  <TableCell align="center">{row.duration}</TableCell>
                  <TableCell align="center">{row.votes}</TableCell>
                  <TableCell align="center">Agregar?</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Fragment>
  );
}
