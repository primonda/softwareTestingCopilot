import React from 'react';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Features from './components/pages/Features';
import Tests from './components/pages/Tests';
import TestScenarios from './components/pages/TestScenarios';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CodeEditor } from './components/pages/CodeEditor';

const appName = "Software Testing Copilot";
const logo = "/src/assets/logo.png";
const teams = ['Portfolios', 'Okrs', 'Roadmaps', 'AgilePlace'];

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if(checked){
      theme = createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#1976d2',
          },
        },
      });
    }
    else{
      theme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HideOnScroll>
          <AppBar color="success" position="sticky">
            <Toolbar>
              <Grid container marginTop={1}>
                <Grid>
                  <img src={logo} alt="logo" className="logo" />
                </Grid>
                <Grid item xs={8} alignSelf={'center'}>
                  <Typography variant="h4" component="div" fontFamily="Gill Sans">
                    {appName}
                  </Typography>
                </Grid>
                <Grid item xs={2} alignItems={'end'} alignSelf={'self-end'}>
                  <FormControlLabel control={<Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />} label="Dark Mode" />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      
      <Router>
        <Routes>
          <Route path="/products" element={<Products exact/>}/>
          <Route path="/product/:pid/features" element={<Features exact/>}/>
          <Route path="/feature/:fid/tests" element={<Tests exact/>}/>
          <Route path="/feature/:fid/testScenarios" element={<TestScenarios exact/>}/>
          <Route path="/codeEditor" element={<CodeEditor exact/>}/>
          <Route path="/signin" exact = {true} element={<SignIn/>} />
          <Route path="/signup" exact element={<SignUp/>}/>     
          <Route path="/dashboard" exact element={<Dashboard teams={teams}/>}/>
        </Routes>
      </Router>
      </ThemeProvider>
    </React.Fragment> 
  )
}

export default App