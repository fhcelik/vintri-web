import React from 'react';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { compose, withState, withHandlers } from 'recompose';
import { saveRating } from '../redux/actions/comment'

const enhance = compose(
    connect(null,{ saveRating }),
    withState('val', 'setVal', 2),
    withHandlers({
        handleChange: ({id, setVal, saveRating}) => (event, newValue) => {
          setVal(newValue);
          saveRating({id, newValue});
        }
    })
);

const SimpleRating = ({ handleChange, value}) => {

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}

export default enhance(SimpleRating);