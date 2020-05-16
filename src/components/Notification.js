import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { checkEmailSelector } from '../redux/selectors/auth';

const enhance = compose(
    connect((state) => ({checkEmail: checkEmailSelector(state)}))
);

const Notification = ({checkEmail}) => {

  return (
    <Grid>
        {!checkEmail && <Typography>It is invalid e-mail format</Typography>}
    </Grid>
  );
}

export default enhance(Notification);