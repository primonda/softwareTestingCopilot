import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TestScenario(props) {

  const navigate = useNavigate();

  useEffect(() => {
  }, []); 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.scenario}
        </Typography>
        <Collapse>
                    {/* Content to display when expanded */}
                    <Box p={2}>
                      <p>City: </p>
                      <p>State: </p>
                      {/* ... other content */}
                    </Box>
                  </Collapse>
      </CardContent>
    </Card>
  );
}