import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Feature from '../Feature';
import NewFeatureModal from './NewFeatureModal';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { useParams, useLocation } from 'react-router-dom';

export default function Features(props) {
  const [responseData, setResponseData] = useState([]);
  const productId = useParams().pid;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productName = searchParams.get('productName');
  const productDescription = searchParams.get('productDescription');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/features/productId/${productId}/allFeatures`, {
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
      <Typography gutterBottom variant="h4" component="div" fontFamily="Gill Sans" align='center' bgcolor={grey}>{productName} Features</Typography>
      <Container style={{ paddingTop: '16px' }}>
      <Typography gutterBottom variant="h6" component="div" fontFamily="Gill Sans" align='justify' bgcolor={grey}>{productDescription}</Typography>
          <NewFeatureModal pid = {productId}/>
          <Grid container spacing={2} marginTop={2}>
            {responseData.length > 0 ? responseData.map((item) => (
              <Grid item xs={4} key={item.id}>
                <Feature title={item.title} description={item.description} fid = {item.id} 
                pid = {productId} productTitle = {productName} productDescription = {productDescription}/>
          </Grid>
          )): null}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
