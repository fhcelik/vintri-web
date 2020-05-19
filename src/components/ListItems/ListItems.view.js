import React from 'react';
import List from '../list';
import Search from '../search'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default ({ age , comment, commentChange, handleChange, handleSubmit, rating, ratingChange, ids}) => {
    const classes = useStyles();

    return (
    <Grid>
        <Search/>
        <List/>
        <Grid>
            <form className={classes.formControl} onSubmit={handleSubmit}>
                <InputLabel id="demo-simple-select-label">ID</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                {ids.map( id => <MenuItem key={id} value={id}>{id}</MenuItem>)}
                </Select>
                <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={ratingChange}
                        />
                    </Box>
                </div>
                <TextField id="standard-basic" label="Comment" value={comment} onChange={commentChange}/>
                <button>Submmit</button>
            </form>
        </Grid>
    </Grid>
)}
 