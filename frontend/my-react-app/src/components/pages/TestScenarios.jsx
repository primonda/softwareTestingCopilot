import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Feature from '../Feature';
// import TestScenario from '../TestScenario';
import TestScenario from '../TestScenario_temp';
import NewFeatureModal from './NewFeatureModal';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import { useParams, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function TestScenarios(props) {
  const [testScenarios, setTestScenarios] = useState([]);
  const [open, setOpen] = useState(-1);
  const featureId = useParams().fid;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pid = searchParams.get('pid');
  const featureTitle = searchParams.get('featureTitle');
  const featureDescription = searchParams.get('featureDescription');
  const productTitle = searchParams.get('productTitle');
  const productDescription = searchParams.get('productDescription');
  
  useEffect(() => {
    const allTestScenariosData = async () => {
      try {
        const allTestScenarios = await fetch(`http://localhost:3000/api/testsScenarios/featureId/${featureId}/allTestsScenarios`, {
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
          },
        });
        const allTestScenariosJson = await allTestScenarios.json();
        setTestScenarios(allTestScenariosJson);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    allTestScenariosData();
  }, []);

  const handleGenerateScenarios = async (event) => {
    console.log("hello");
    event.preventDefault();
      try{
        const response = await fetch(`http://localhost:3000/api/testsScenarios/featureId/${featureId}/generateTestScenarios`, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify({
            pid: pid,
            feature_title: featureTitle,
            feature_description: featureDescription,
            product_title: productTitle,
            product_description: productDescription
          })
        })
        const responseData = await response.json();
        console.log(responseData);
        handleClose();
      } catch (error){
        console.log(error);
      }
  };

  return (
    <React.Fragment>
      {/* <Typography gutterBottom variant="h4" component="div" fontFamily="Gill Sans" align='center' bgcolor={grey}>{productName} Features</Typography> */}
      <Container style={{ paddingTop: '16px', paddingBottom: '16px' }}>
      {/* <Typography gutterBottom variant="h6" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>{productDescription}</Typography> */}
          <Button onClick={handleGenerateScenarios} variant="outlined" sx={{marginTop: 4, marginBottom: 4}}>Generate Test Scenarios</Button>
          {/* <Grid container spacing={2} marginTop={2}>
            {testScenarios.length > 0 ? testScenarios.map((item) => (
              <Grid item xs={4} key={item.id}>
                <TestScenario scenario={item.scenario} description={item.description} fid = {item.id} pid = {pid} />
          </Grid>
          )): null}
        </Grid> */}
      <TableContainer component={Paper} style={{paddingTop: '16px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell scope="header"><Typography gutterBottom variant="h5" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>Test Scenario</Typography></TableCell>
            <TableCell><Typography gutterBottom variant="h5" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>Status</Typography></TableCell>
            {/* ... other table headers */}
          </TableRow>
        </TableHead>
        <TableBody>
          {testScenarios.map((scenario, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>
                <IconButton
                    onClick={() => setOpen(index === open ? -1 : index)}
                  >
                    {index === open ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                  </TableCell>
                  <TableCell>
                  <Typography gutterBottom variant="h7" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>{scenario.scenario}</Typography>
                  <Collapse in={index === open}>
                    {/* Content to display when expanded */}
                    <Box p={2}>
                    <Typography gutterBottom variant="h5" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>Test Steps:</Typography>
                      <Box paddingLeft={2}>
                        {scenario.test_steps.map((testStep, index) => (
                          <p key = {index}>{testStep}</p>))
                        }
                      </Box>
                    </Box>
                  </Collapse>
                </TableCell>
                <TableCell>Pass</TableCell>
                {/* ... other table cells */}
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </React.Fragment>
  );
}
