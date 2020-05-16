import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Notification from '../Notification';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default ({handleChange, handleSubmit, query}) => {
    const classes = useStyles();
    return (
        <form className={classes.margin} onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
                <AccountCircle />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="Enter e-mail" value={query} onChange={handleChange}/>
            </Grid>
            <button>Submit</button>
            <Notification/>
            </Grid>
        </form>
    )
}

