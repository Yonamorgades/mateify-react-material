import React from 'react';
import Login from './Pages/Login';
import Error from './Components/Error';
import NavBar from './Components/NavBar';
import Container from '@material-ui/core/Container';
import {useState} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Playlist from './Pages/Playlist';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import users from './users.json';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#00C853'
    }
  }
});

const App = () => {
  const [loginState,
    setLoginState] = useState(false);
  const [loginMail,
    setLoginMail] = useState('');
  const [loginPsw,
    setLoginPsw] = useState('');
  const [loginError,
    setLoginError] = useState(false);
  const [currentUser,
    setCurrentUser] = useState({});
  const handleClickLogin = () => {
    let validateUser = users.find(u => loginMail === u.email && loginPsw === u.password);
    if (validateUser) {
      setLoginState(true);
      setCurrentUser({email: validateUser.email, imageUrl: validateUser.profilePictureUrl});
    } else {
      setLoginError(true)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginError(false);
  };
  const handleChangePsw = (e) => {
    setLoginPsw(e.target.value)
  };
  const handleChangeMail = (e) => {
    setLoginMail(e.target.value)
  };
  React.useEffect(() => {}, [loginState, loginError]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box m={0}>
          <NavBar loginState={loginState} currentUser={currentUser}/>
        </Box>
        <Container>
          <Switch>
            <Route path="/Playlist" exact>
              {!loginState && <Error></Error>}
              {loginState && <Playlist></Playlist>}
            </Route>
            <Route path="/">
              {!loginState && <Login
                handleClickLogin={handleClickLogin}
                handleChangeMail={handleChangeMail}
                handleChangePsw={handleChangePsw}></Login>}
              {loginError && <Snackbar open={loginError} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                  Usuario y/o contraseña incorrectos
                </Alert>
              </Snackbar>
}
              {loginState && <Redirect to="/playlist"/>}
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App;