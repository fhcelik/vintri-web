import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps, withState } from 'recompose';
import List from './List.view';
import Comment from '../Comment';
import Rating from '../Rating';
import { getBeersPropsSelector } from '../../redux/selectors/beers'

export default compose(
    connect(state => ({ beerProps: getBeersPropsSelector(state) })),
    withState('page', 'setPage', 0),
    withState('rowsPerPage', 'setRowsPerPage', 10),
    withHandlers({
        handleChangePage: ({setPage}) => (event, newPage) => {
            setPage(newPage);
        },
        handleChangeRowsPerPage: ({setPage, setRowsPerPage}) => (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
        }
    }),
    withProps(({beerProps}) =>  (
        beerProps.map(({ id, name, description, first_brewed, food_pairings }) => 
            ({id, name, description, first_brewed, food_pairings, rating:<Rating id={id}/>, comment:<Comment id={id}/>}) )
        ))
  )(List);