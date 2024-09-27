import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Product(props) {
  const navigate = useNavigate();

  useEffect(() => {
  }, []); 

  const navigateToProductFeatures = () => {
    navigate(`/product/${props.pid}/features?productName=${props.title}&productDescription=${props.description}`);
  };

  return (
    <Card sx={{  }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Box height={100}>
          <Typography variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 5,
              }}>
            {props.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={navigateToProductFeatures}>
          Features
        </Button>
        <Button size="small">Tests</Button>
      </CardActions>
    </Card>
  );
}
