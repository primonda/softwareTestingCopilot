import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Content from './components/Content';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Box paddingTop={10}>
      <Grid container spacing={5}>
        <Grid item xs={10}> 
          <Typography variant='h4' fontFamily={"Arial, Helvetica, sans-serif"} color={"rgb(26, 51, 0)"}>
            Anu and Pritam's Wedding Reception
          </Typography>
        </Grid>
      </Grid>
      </Box>
      <Box paddingTop={10}>
        <Grid container spacing={5}>
          <Content 
            contentHeader = "Save the Date"
            contentBody = "We're thrilled to invite you to join us on our special day! Please find all the essential details about our wedding reception here. Let us know if you have any questions or need further information.">
          </Content>
          <Grid item xs={4}>
            <img className='images-container' src="../src/assets/DSC_0107.JPG" alt="" />
          </Grid>
        </Grid>
      </Box>
      <Box paddingTop={10}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <img className='images-container' src="../src/assets/1A5C5ACB-F95D-4C26-A80A-F3ECACC06E8D_1_105_c.jpeg" alt="" />
              </Grid>
              <Grid item xs={4}>
                <img className='images-container' src="../src/assets/9DF185C0-09E5-4641-A15E-BDED588F59BD_1_105_c.jpeg" alt="" />
              </Grid>
              <Grid item xs={4}>
                <img className='images-container' src="../src/assets/D1F87B28-83B7-4507-8062-EAB9E5A8A774_1_105_c.jpeg" alt="" />
              </Grid>
              <Grid item xs={4}>
                <img className='images-container' src="../src/assets/DSC_0132.JPG" alt="" />
              </Grid>
            </Grid>
          </Grid>
          <Content
            contentHeader = "Our Love Story"
            contentBody = "Our love story started as a friendship that soon blossomed into something more. With every passing day, we knew that we were meant to be together. We're grateful for our unique bond and can't wait to share our joy with you. Join us as we celebrate our love and our future together."
          >
          </Content>
        </Grid>
      </Box>
    </Container>
  )
}

export default App
