import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Test from '../Test';
import NewTestModal from './NewTestModal';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { useParams, useLocation } from 'react-router-dom';

export default function Tests(props) {
  const [responseData, setResponseData] = useState([]);
  const featureId = useParams().fid;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productName = searchParams.get('productName');
  const productDescription = searchParams.get('productDescription');
  const productId = searchParams.get('pid');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/tests/featureId/${featureId}/allTests`, {
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h4" component="div" fontFamily="Gill Sans" align='center' bgcolor={grey}>{productName} Tests</Typography>
      <Container style={{ paddingTop: '16px' }}>
      <Typography gutterBottom variant="h6" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>{productDescription}</Typography>
      <NewTestModal pid = {productId} fid = {featureId}/>
      <Grid container spacing={2} margin={2} marginLeft={0} justifyContent="center" alignItems="center">
        
              <Grid xs={3}>
                 <Typography sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                }}>Test Name</Typography>
              </Grid>
              <Grid xs={3}>
                 <Typography sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                }}>Description</Typography>
              </Grid>
              <Grid xs={3}>
                 <Typography>Run</Typography>
              </Grid>
              <Grid xs={3}>
                 <Typography>Status</Typography>
              </Grid>
            {responseData.length > 0 ? responseData.map((item) => (
              // <Grid item xs={12} key={item.id}>
                <Test title={item.title} description={item.description} key={item.id} />
              // </Grid>
            )): null}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
