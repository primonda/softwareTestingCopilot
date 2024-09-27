import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {createTheme,ThemeProvider} from "@mui/material"

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h2"
                    },
                    style:{
                        color: "rgb(0, 77, 0)",
                        fontFamily: "Gill Sans",
                        padding: "5%",
                    }
                },
                {
                    props: {
                        variant: "body1"
                    },
                    style:{
                        color: "rgb(51, 51, 0)",
                        fontFamily: "sans-serif",
                        padding: "5%",
                        width: "70%",
                    }
                }
            ]
        }
    }
})

export default function Content(props) {
  return (
            <Grid item xs={8}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h2' component="h2">
                        {props.contentHeader}
                    </Typography>
                    <Typography variant='body1'>
                        {props.contentBody}
                    </Typography>
                </ThemeProvider>
            </Grid>
  )

}