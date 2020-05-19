import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { branch, compose, renderComponent } from 'recompose';
import { checkEmailSelector } from '../redux/selectors/auth';
import ListItems from './ListItems';
import { push } from 'connected-react-router';

const enhance = compose(
    connect((state) => ({checkEmail: checkEmailSelector(state)})),
    branch(({checkEmail}) => checkEmail, renderComponent(ListItems)),
);

const Notification = ({checkEmail}) => {

  return (
    <Grid>
        { !checkEmail && <Typography>It is invalid e-mail format</Typography>}
    </Grid>
  );
}

export default enhance(Notification);