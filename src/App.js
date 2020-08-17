import React from 'react';
import Login from './Pages/Login';
import Error from './Components/Error';
import NavBar from './Components/NavBar';
import Container from '@material-ui/core/Container';
import {useState} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Playlist from './Pages/Playlist';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#00C853'
    }
  },
});


const App = () => {
  //Change LoginState value to show playlist or not
  const [loginState,
    setLoginState] = useState(true);
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <NavBar justify="center"/>
          <Container>
            <Switch>
              <Route path="/Playlist" exact>
                {!loginState && <Error></Error>}
                {loginState  && <Playlist></Playlist>}
              </Route>
              <Route path="/" exact>
                <Login></Login>
              </Route>
            </Switch>
          </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App;
