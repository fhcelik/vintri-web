import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { compose, withHandlers } from 'recompose';
import { makeStyles } from '@material-ui/core/styles';
import { saveComment } from '../redux/actions/comment';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const enhance = compose(
    connect(null,{ saveComment }),
    withHandlers({
        handleChange: ({ id, saveComment }) => ({ target: { value } }) => {
            saveComment({id, value});
          },
    })
);

const Comment = ({handleChange, value}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
        <TextField id="standard-basic" label="Comment" value={value} onChange={handleChange}/>
    </form>
  );
}

export default enhance(Comment);