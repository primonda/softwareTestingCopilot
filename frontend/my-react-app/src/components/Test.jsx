import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// export default function Test(props) {

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.title}
//         </Typography>
//         <Box height={100}>
//           <Typography variant="body2"
//               color="text.secondary"
//               sx={{
//                 display: '-webkit-box',
//                 overflow: 'hidden',
//                 WebkitBoxOrient: 'vertical',
//                 WebkitLineClamp: 5,
//               }}>
//             {props.description}
//           </Typography>
//         </Box>
//       </CardContent>
//       <CardActions>
//         <Button size="small">RUN</Button>
//       </CardActions>
//     </Card>
//   );
// }

export default function Test(props) {

  return (
    // <Card >
    <React.Fragment>
      {/* <Grid container spacing={2} margin={2} marginLeft={0} justifyContent="center" alignItems="center"> */}
      {/* // <CardContent> */}
        <Grid item xs={3} >
          <Typography variant="body2"
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                }}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {/* <Box height={100}> */}
            <Typography variant="body2"
                color="text.secondary"
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                }}>
              {props.description}
            </Typography>
          {/* </Box> */}
        </Grid>
        {/* // </CardContent> */}
        <Grid item xs={3}>
        {/* <CardActions> */}
          <Button size="small">RUN</Button>
        {/* </CardActions> */}
        </Grid>
        <Grid item xs={3}>
        {/* <CardActions> */}
          <Typography size="small"></Typography>
        {/* </CardActions> */}
        </Grid>
      {/* </Grid> */}
    {/* // </Card> */}
    </React.Fragment>
  );
}