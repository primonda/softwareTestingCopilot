import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Feature(props) {

  const navigate = useNavigate();

  useEffect(() => {
  }, []); 
  
  const navigateToFeatureTests = () => {
    navigate(`/feature/${props.fid}/tests?testName=${props.title}&testDescription=${props.description}&pid=${props.pid}`);
  };

  const navigateToFeatureTestScenarios = () => {
    navigate(`/feature/${props.fid}/testScenarios?pid=${props.pid}&featureTitle=${props.title}&featureDescription=${props.description}&productTitle=${props.productTitle}&productDescription=${props.productDescription}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small" onClick={navigateToFeatureTests}>Tests</Button>
        <Button size="small" onClick={navigateToFeatureTestScenarios}>Test Scenarios</Button>
      </CardActions>
    </Card>
  );
}