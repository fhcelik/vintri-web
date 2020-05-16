import React from 'react';
import Login from './login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListItems from './ListItems'
import { Grid } from '@material-ui/core';

const App = () => (
    <Grid>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/list' component={ListItems} />
        </Switch>
      </BrowserRouter>
    </Grid>
)

export default App;
