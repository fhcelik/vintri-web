import { Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListItems from './ListItems/index';
import Login from './login';

const App = () => (
    <Grid>
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={ListItems} />
          <Route exact path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </Grid>
)

export default App;
