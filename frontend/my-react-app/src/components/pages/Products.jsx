import React, { useState, useEffect } from 'react';
import './styles/Home.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Product from '../Product';
import NewProductModal from './NewProductModal';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

export default function Products(props) {

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products/tenantId/1/allProducts', {
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
      <Typography gutterBottom variant="h4" component="div" fontFamily="Gill Sans" align='center' bgcolor={grey}>Products</Typography>
      <Container style={{ paddingTop: '16px' }}>
          <NewProductModal />
          <Grid container spacing={2} marginTop={2}>
            {responseData.map((item) => (
              <Grid item xs={4} key={item.id}>          
                <Product title={item.title} description={item.description} pid = {item.id} />
          </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
