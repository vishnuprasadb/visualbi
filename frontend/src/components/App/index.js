import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Job from './Job/index';

const useStyle = makeStyles(theme => ({
    gridContainer: {
      margin: "0 auto"
    }
}));

const Index = () => {
    const classes = useStyle();
    return (
        <div>
            <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            alignContent="center"
            className={classes.gridContainer}
            >
                <Job />
            </Grid>
        </div>
    )
}
export default Index;
