import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import List from '../list';
import Search from '../search';

export default ({ age , comment, commentChange, handleChange, handleSubmit, rating, ratingChange, ids}) => 
    (
    <Grid>
        <Search/>
        <List/>
        <Grid>
            <form style={{ border:'red dashed 1px', margin:'10px 500px'}} onSubmit={handleSubmit}>
                <Grid container>
                    <InputLabel id="demo-simple-select-label">ID : </InputLabel>
                    <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                    {ids.map( id => <MenuItem key={id} value={id}>{id}</MenuItem>)}
                    </Select>
                </Grid>
                <Grid> 
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={ratingChange}
                        />
                    </Box>
                </Grid>
                <TextField id="standard-basic" label="Comment" value={comment} onChange={commentChange}/>
                <button style={{ 
                          backgroundColor: 'grey',
                          border: 'none',
                          color: 'white',
                          padding: '15px 32px',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'inline-block',
                          fontSize: '16px',
                          marginTop: '2px',
                          marginLeft: '12px',
                          cursor: 'pointer', }}>Submit</button>
            </form>
        </Grid>
    </Grid>
)
 